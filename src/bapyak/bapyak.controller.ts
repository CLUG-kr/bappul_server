import { Controller, Post, UseGuards, Request, Body, Get, Query, Param, Delete } from '@nestjs/common';
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

        
    @Get('/home')
    async recentBapyakforHome() {
        return await this.appService.recentBapyakforHome()
    }
    
    @Get('/:id')
    async showOneBapyak(@Param('id') id) {
        return this.appService.showOneBapyak(id)
    }

    @Get('/:mode/search/:keyword/:requestCount')
    async serchBapyaks(@Param("mode") mode, @Param("keyword") keyword, @Param("requestCount") requestCount, @Query('gender') gender, @Query('major') major) {
        const serchOption = new SerchOption(gender, mode, major);
        const bapyak = await this.appService.serchBapyaks(requestCount, serchOption, keyword);
        const bapyakList = {
            "bapyaks" : bapyak,
            "length" : bapyak.length
        }
        return bapyakList
    }

    @UseGuards(JwtAuthGuard)
    @Get("/:mode/:requestCount")
    async showBapyaks(@Request() req, @Param("mode") mode, @Param("requestCount") requestCount, @Query('gender') gender, @Query('major') major) {
        const serchOption = new SerchOption(gender, mode, major)
        const bapyak = await this.appService.showBapyaks(requestCount, serchOption)
        const bapyakList = {
            bapyaks : bapyak,
            length : bapyak.length
        }
        console.log(bapyakList)
        return bapyakList
    }


    @Delete()
    async deleteAll() {
        this.appService.deleteAll()
    }
}
