import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import {
  ApiCookieAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import type { FastifyRequest } from 'fastify';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { AuthService } from '../../auth/services/auth.service';

@Controller('dashboard')
@UseGuards(AuthGuard)
@ApiTags('dashboard')
@ApiCookieAuth('session')
export class DashboardController {
  constructor(private readonly authService: AuthService) {}

  @Get('/')
  @Render('dashboard')
  @ApiOperation({
    summary: 'Get dashboard page',
    description: 'Renders the dashboard page with user information',
  })
  @ApiResponse({
    status: 200,
    description: 'Dashboard page rendered successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - user not authenticated',
  })
  async getDashboard(
    @Req() request: FastifyRequest,
  ): Promise<Record<string, unknown>> {
    const session = request.session as unknown as { userId?: string };
    const user = session.userId
      ? await this.authService.findUserById(session.userId)
      : null;

    return {
      title: 'Dashboard',
      user: user || null,
      fullWidth: true,
    };
  }
}
