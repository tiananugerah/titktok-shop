export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
  role?: 'admin' | 'user';
}

export interface LoginRequest {
  username: string;
  password: string;
  auth_code: string;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  refreshToken: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
  expiresIn: number;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}
