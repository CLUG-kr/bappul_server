import { Controller, Get, Header, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UserService } from './users/users.service'

@Controller()

@Controller()
export class AppController {
    constructor(
        private authService: AuthService,
        private userService: UserService) {}

    @Get()
    @Header('Cache-Control', 'no-store, no-cache')
    showHealthy() {
        return "healthy";
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        console.log("hi")
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        console.log(req.user)
        return req.user;
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile/info')
    async getNameAndEntranceYear(@Request() req) {
        const user = await this.userService.findUserByCode(req.user.userId)
        return {
            "name": user.name,
            "entranceYear": user.entranceYear,
        }
    }
}
