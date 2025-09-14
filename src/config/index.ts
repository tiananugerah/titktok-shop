import { config } from 'dotenv';
import { z } from 'zod';

// Load environment variables
config();

const configSchema = z.object({
  // TikTok Shop API Configuration
  TIKTOK_APP_KEY: z.string().min(1, 'TikTok App Key is required'),
  TIKTOK_APP_SECRET: z.string().min(1, 'TikTok App Secret is required'),
  TIKTOK_ACCESS_TOKEN: z.string().min(1, 'TikTok Access Token is required'),
  TIKTOK_BASE_PATH: z.string().url().default('https://open-api.tiktokglobalshop.com'),
  TIKTOK_SANDBOX: z.string().transform(val => val === 'true').default('false'),

  // Redis Configuration
  REDIS_HOST: z.string().default('127.0.0.1'),
  REDIS_PORT: z.string().transform(Number).default('6379'),

  // Server Configuration
  PORT: z.string().transform(Number).default('3000'),
  HOST: z.string().default('0.0.0.0'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  // CORS Configuration
  CORS_ORIGIN: z.string().default('*'),
  CORS_CREDENTIALS: z.string().transform(val => val === 'true').default('true'),

  // Logging
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),

  // JWT Configuration
  JWT_SECRET: z.string().min(32, 'JWT secret must be at least 32 characters').default('your-super-secret-jwt-key-change-this-in-production-12345'),
});

export type Config = z.infer<typeof configSchema>;

let appConfig: Config;

try {
  appConfig = configSchema.parse(process.env);
} catch (error) {
  console.error('Configuration validation failed:', error);
  process.exit(1);
}

export default appConfig;
