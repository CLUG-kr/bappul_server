import { Controller, Post, UseGuards, Request, Body, Param, Delete, Get } from '@nestjs/common';
import { BapyakCommentService } from './bapyak_comment.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BapyakComment } from '../entities/bapyak_comment.entity'
import { identity } from 'rxjs';

@Controller('bapyakcomment')
export class BapyakCommentController {
    constructor(
        private readonly appService: BapyakCommentService,
    ){}

    @UseGuards(JwtAuthGuard)
    @Post('/:id')
    async postNewComment(@Request() req, @Param('id') ownerId, @Body() comment:BapyakComment) {
        comment.ownerPostId = ownerId
        comment.userCode = req.user.userId
        await this.appService.postNewComment(comment)
        return {"result": "success"}
    }

    @Get('/:id')
    async getComments(@Param('id') id:string) {
        return this.appService.getComments(id)
    }

    @Delete()
    async deleteAll() {
        await this.deleteAll()
    }
}
