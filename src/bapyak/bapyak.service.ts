import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bapyak } from '../entities/bapyak.entity'

@Injectable()
export class BapyakService {
    constructor(
        @InjectRepository(Bapyak)
        private bapYakRepository: Repository<Bapyak>
    ){}

    async postNewBapyak(req, posting) {
        const content = {
            userCode: req.user.userId,
            content: posting.content
        }
        this.bapYakRepository.insert(content);
    }
}
