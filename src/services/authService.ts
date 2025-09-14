import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { User, CreateUserRequest, LoginRequest, AuthResponse, RefreshTokenRequest } from '../models/User';
import config from '../config';
import { tiktokService } from './tiktokService';

// In-memory storage (in production, use a real database)
const users: User[] = [];
const refreshTokens: Map<string, { userId: string; expiresAt: Date }> = new Map();

export class AuthService {
  private readonly JWT_SECRET = config.JWT_SECRET;
  private readonly JWT_EXPIRES_IN = '1h';
  private readonly REFRESH_TOKEN_EXPIRES_IN = '7d';

  /**
   * Register a new user
   */
  async register(userData: CreateUserRequest): Promise<AuthResponse> {
    // Check if user already exists
    const existingUser = users.find(u => u.username === userData.username || u.email === userData.email);
    if (existingUser) {
      throw new Error('User already exists with this username or email');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 12);

    // Create user
    const user: User = {
      id: uuidv4(),
      username: userData.username,
      email: userData.email,
      password: hashedPassword,
      role: userData.role || 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
    };

    users.push(user);

    // Generate tokens
    const tokens = await this.generateTokens(user);

    return {
      success: true,
      token: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      expiresIn: 3600, // 1 hour in seconds
    };
  }

  /**
   * Login user
   */
  async login(loginData: LoginRequest): Promise<AuthResponse> {
    // Find user
    const user = users.find(u => u.username === loginData.username && u.isActive);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(loginData.password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    // Generate tokens
    await tiktokService.init(loginData.auth_code);
    const tokens = await this.generateTokens(user);

    return {
      success: true,
      token: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      expiresIn: 3600, // 1 hour in seconds
    };
  }

  /**
   * Refresh access token
   */
  async refreshToken(refreshTokenData: RefreshTokenRequest): Promise<AuthResponse> {
    const refreshTokenInfo = refreshTokens.get(refreshTokenData.refreshToken);
    
    if (!refreshTokenInfo || refreshTokenInfo.expiresAt < new Date()) {
      throw new Error('Invalid or expired refresh token');
    }

    const user = users.find(u => u.id === refreshTokenInfo.userId && u.isActive);
    if (!user) {
      throw new Error('User not found');
    }

    // Generate new tokens
    const tokens = await this.generateTokens(user);

    return {
      success: true,
      token: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      expiresIn: 3600, // 1 hour in seconds
    };
  }

  /**
   * Verify JWT token
   */
  async verifyToken(token: string): Promise<User> {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET) as any;
      const user = users.find(u => u.id === decoded.userId && u.isActive);
      
      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  /**
   * Generate access and refresh tokens
   */
  private async generateTokens(user: User): Promise<{ accessToken: string; refreshToken: string }> {
    // Generate access token
    const accessToken = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      this.JWT_SECRET,
      { expiresIn: this.JWT_EXPIRES_IN }
    );

    // Generate refresh token
    const refreshToken = uuidv4();
    const refreshTokenExpiry = new Date();
    refreshTokenExpiry.setDate(refreshTokenExpiry.getDate() + 7); // 7 days

    // Store refresh token
    refreshTokens.set(refreshToken, {
      userId: user.id,
      expiresAt: refreshTokenExpiry,
    });

    return { accessToken, refreshToken };
  }

  /**
   * Get all users (admin only)
   */
  async getAllUsers(): Promise<Omit<User, 'password'>[]> {
    return users.map(user => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  }

  /**
   * Get user by ID
   */
  async getUserById(id: string): Promise<Omit<User, 'password'> | null> {
    const user = users.find(u => u.id === id);
    if (!user) return null;

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * Update user
   */
  async updateUser(id: string, updateData: Partial<Omit<User, 'id' | 'createdAt' | 'password'>>): Promise<Omit<User, 'password'> | null> {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) return null;

    users[userIndex] = {
      ...users[userIndex],
      ...updateData,
      updatedAt: new Date(),
    };

    const { password, ...userWithoutPassword } = users[userIndex];
    return userWithoutPassword;
  }

  /**
   * Delete user
   */
  async deleteUser(id: string): Promise<boolean> {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) return false;

    users[userIndex].isActive = false;
    users[userIndex].updatedAt = new Date();
    return true;
  }

  /**
   * Logout (invalidate refresh token)
   */
  async logout(refreshToken: string): Promise<boolean> {
    return refreshTokens.delete(refreshToken);
  }
}

// Export singleton instance
export const authService = new AuthService();
