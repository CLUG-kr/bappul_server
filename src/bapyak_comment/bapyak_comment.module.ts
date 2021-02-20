import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BapyakCommentController } from './bapyak_comment.controller'
import { BapyakCommentService } from './bapyak_comment.service'

@Module({
    imports: [TypeOrmModule.forFeature([])],
    controllers: [BapyakCommentController],
    providers: [BapyakCommentService],
    exports: [BapyakCommentService]
})
export class BapyakCommentModule {}
