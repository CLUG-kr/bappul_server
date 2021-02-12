import { Controller, Post, UseGuards, Request, Body, Get } from '@nestjs/common';
import { BapyakService } from './bapyak.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Bapyak } from '../entities/bapyak.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('bapyak')
export class BapyakController {
    constructor(
        private readonly appService: BapyakService,
    ){}

    @UseGuards(JwtAuthGuard)
    @Post()
    async postNewBapyak(@Request() req, @Body() posting) {
        this.appService.postNewBapyak(req, posting)
    }
}
