import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { BapyakComment } from '../entities/bapyak_comment.entity'
import { Bapyak } from '../entities/bapyak.entity'
import { UserService } from '../users/users.service'

@Injectable()
export class BapyakCommentService {
    constructor(
        @InjectRepository(BapyakComment)
        private bapYakCommentRepository: Repository<BapyakComment>,

        @InjectRepository(Bapyak)
        private bapYakRepository: Repository<Bapyak>,

        private readonly userService: UserService,
    ){}    

    async postNewComment(comment:BapyakComment) {
        await this.bapYakCommentRepository.insert(comment)
        const bapyak = await this.bapYakRepository.findOne({"id": comment.ownerPostId})
        await this.bapYakRepository.update({"id": comment.ownerPostId}, {"comentNum": bapyak.comentNum+1})
    }

    async getComments(bapyakId:string) {
        const commentInfo = await this.bapYakCommentRepository.find({"ownerPostId": bapyakId})
        let comments = []
        for(const element of commentInfo) {
            const user = await this.userService.findUserByCode(element.userCode)
            const commentForm = {
                "name": user.name,
                "entranceYear": user.entranceYear,
                "date": element.createdDate,
                "content": element.content
            }
            comments.push(commentForm)
        }
        return comments
    }
}
