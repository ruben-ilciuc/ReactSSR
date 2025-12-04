import { Controller, Get, Redirect, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';

@Controller()
export class AppController {
  @Get()
  @Redirect('auth/sign-in')
  root(@Req() request: FastifyRequest): { url: string } {
    const session = request.session as unknown as { userId?: string };

    // Redirect to dashboard if authenticated, otherwise to sign-in
    if (session?.userId) {
      return { url: '/dashboard' };
    }

    return { url: '/auth/sign-in' };
  }
}
