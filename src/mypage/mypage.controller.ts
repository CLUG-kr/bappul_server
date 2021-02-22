import { Controller, Post, UseGuards, Request, Body, Param, Delete, Get } from '@nestjs/common';
import { MypageService } from './mypage.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserService } from '../users/users.service'
@Controller('mypage')
export class MypageController {
    constructor(
        private readonly appService: MypageService,
        private readonly userService: UserService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('/my_bapyaks/:requestCount')
    async getMyBapyaks(@Request() req, @Param('requestCount') requestCount) {
        const bapyaks = await this.appService.getMyBapyaks(req.user.userId, requestCount)
        const user = await this.userService.findUserByCode(req.user.userId)
        const bapyakList = {
            "bapyaks" : bapyaks,
            "length" : bapyaks.length,
            "name": user.name
        }
        return bapyakList
    }
}
