import { Controller, Post, UseGuards, Request, Body, Get, Query } from '@nestjs/common';
import { BapyakService } from './bapyak.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Bapyak } from '../entities/bapyak.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    @Get()
    async showBapyaks(@Request() req, @Query() gender, @Query() grade, @Query() major) {
        const serchOption = new SerchOption(gender, grade, major)
        this.appService.showBapyaks(req, serchOption)
    }
}
