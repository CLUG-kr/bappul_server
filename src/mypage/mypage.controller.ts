import { Controller, Post, UseGuards, Request, Body, Param, Delete, Get } from '@nestjs/common';
import { MypageService } from './mypage.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BapyakComment } from '../entities/bapyak_comment.entity'

@Controller('mypage')
export class MypageController {
    constructor(
        private readonly appService: MypageService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('/my_bapyaks/:requestCount')
    async getMyBapyaks(@Request() req, @Param('requestCount') requestCount) {
        const bapyaks = await this.appService.getMyBapyaks(req.user.userId, requestCount)
        const bapyakList = {
            "bapyaks" : bapyaks,
            "length" : bapyaks.length
        }
        return bapyakList
    }
}
