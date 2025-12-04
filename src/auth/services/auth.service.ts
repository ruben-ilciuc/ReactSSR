import { Injectable } from '@nestjs/common';

/**
 * User interface for authentication
 */
export interface User {
  id: string;
  email: string;
  name: string;
}

/**
 * Authentication service
 * Handles user authentication logic
 */
@Injectable()
export class AuthService {
  // In-memory user store (replace with database in production)
  private readonly users: User[] = [
    {
      id: '1',
      email: 'admin@example.com',
      name: 'Admin User',
    },
    {
      id: '2',
      email: 'user@example.com',
      name: 'Regular User',
    },
  ];

  /**
   * Authenticate user with email and password
   * @param email User email
   * @param password User password
   * @returns User if authenticated, null otherwise
   */
  async validateUser(email: string, password: string): Promise<User | null> {
    // In a real application, you would:
    // 1. Hash the password and compare with stored hash
    // 2. Query the database for the user
    // For demo purposes, accept any password for existing users
    const user = this.users.find((u) => u.email === email);
    if (user && password) {
      // Simple validation - in production, use bcrypt to compare hashed passwords
      return Promise.resolve(user);
    }
    return null;
  }

  /**
   * Find user by email
   * @param email User email
   * @returns User if found, null otherwise
   */
  async findUserByEmail(email: string): Promise<User | null> {
    return Promise.resolve(this.users.find((u) => u.email === email) || null);
  }

  /**
   * Find user by ID
   * @param id User ID
   * @returns User if found, null otherwise
   */
  async findUserById(id: string): Promise<User | null> {
    return Promise.resolve(this.users.find((u) => u.id === id) || null);
  }
}
