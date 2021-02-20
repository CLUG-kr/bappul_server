import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { BapyakComment } from '../entities/bapyak_comment.entity'
import { Bapyak } from '../entities/bapyak.entity'

@Injectable()
export class BapyakCommentService {
    constructor(
        @InjectRepository(BapyakComment)
        private bapYakCommentRepository: Repository<BapyakComment>,

        @InjectRepository(Bapyak)
        private bapYakRepository: Repository<Bapyak>
    ){}    

    async postNewComment(comment:BapyakComment) {
        await this.bapYakCommentRepository.insert(comment)
        const bapyak = await this.bapYakRepository.findOne({"id": comment.ownerPostId})
        await this.bapYakRepository.update({"id": comment.ownerPostId}, {"comentNum": bapyak.comentNum+1})
    }
}
