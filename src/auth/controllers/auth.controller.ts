import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCookieAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { AuthService } from '../services/auth.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/sign-in')
  @Render('sign-in')
  @ApiOperation({
    summary: 'Get sign-in page',
    description:
      'Renders the sign-in page or redirects to dashboard if already authenticated',
  })
  @ApiResponse({
    status: 200,
    description: 'Sign-in page rendered successfully',
  })
  @ApiResponse({
    status: 302,
    description: 'Redirects to dashboard if already authenticated',
  })
  async getSignIn(
    @Req() request: FastifyRequest,
    @Res() reply: FastifyReply,
  ): Promise<Record<string, unknown> | FastifyReply | void> {
    const session = request.session as unknown as { userId?: string };

    // Redirect to dashboard if already authenticated
    if (session?.userId) {
      return reply.redirect('/dashboard', 302);
    }

    return {
      title: 'Sign in',
      error: null,
    };
  }

  @Post('/sign-in')
  @Redirect('/dashboard')
  @ApiOperation({
    summary: 'Sign in user',
    description: 'Authenticates user and creates a session',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'user@example.com' },
        password: { type: 'string', example: 'password123' },
      },
      required: ['email', 'password'],
    },
  })
  @ApiResponse({
    status: 302,
    description: 'Redirects to dashboard on successful authentication',
  })
  @ApiResponse({
    status: 200,
    description: 'Renders sign-in page with error message on failure',
  })
  async signIn(
    @Body() body: { email?: string; password?: string },
    @Req() request: FastifyRequest,
  ): Promise<Record<string, unknown> | void> {
    const { email, password } = body;

    if (!email || !password) {
      return {
        title: 'Sign in',
        error: 'Email and password are required',
      };
    }

    const user = await this.authService.validateUser(email, password);

    if (!user) {
      return {
        title: 'Sign in',
        error: 'Invalid email or password',
      };
    }

    // Set session
    const session = request.session as unknown as {
      userId?: string;
      userEmail?: string;
    };
    session.userId = user.id;
    session.userEmail = user.email;
  }

  @Post('/logout')
  @Redirect('/auth/sign-in')
  @ApiOperation({
    summary: 'Logout user',
    description: 'Destroys user session and redirects to sign-in page',
  })
  @ApiCookieAuth('session')
  @ApiResponse({
    status: 302,
    description: 'Redirects to sign-in page after logout',
  })
  logout(@Req() request: FastifyRequest): void {
    request.session.delete();
  }
}
