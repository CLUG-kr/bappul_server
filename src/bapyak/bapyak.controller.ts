import { Controller, Post, UseGuards, Request, Body, Get, Query, Param } from '@nestjs/common';
import { BapyakService } from './bapyak.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SerchOption } from '../entities/serchOption'

@Controller('bapyak')
export class BapyakController {
    constructor(
        private readonly appService: BapyakService,
    ){}

    @UseGuards(JwtAuthGuard)
    @Post()
    async postNewBapyak(@Request() req, @Body() posting) {
        this.appService.postNewBapyak(req, posting)
        return {"result": "success"}
    }

    @UseGuards(JwtAuthGuard)
    @Get("/:mode/:requestCount")
    async showBapyaks(@Request() req, @Param("mode") mode, @Param("requestCount") requestCount, @Query('gender') gender, @Query('major') major) {
        const serchOption = new SerchOption(gender, mode, major)
        return await this.appService.showBapyaks(requestCount, serchOption)
    }
}
