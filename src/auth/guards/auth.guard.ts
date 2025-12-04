import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { FastifyRequest } from 'fastify';

/**
 * Authentication guard
 * Protects routes that require authentication
 */
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<FastifyRequest>();
    const session = request.session as unknown as { userId?: string };

    if (!session?.userId) {
      throw new UnauthorizedException('Authentication required');
    }

    return true;
  }
}
