import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bapyak } from '../entities/bapyak.entity'
import { SerchOption } from '../entities/serchOption'
import { UserService } from '../users/users.service'

@Injectable()
export class BapyakService {
    constructor(
        @InjectRepository(Bapyak)
        private bapYakRepository: Repository<Bapyak>,

        private readonly userService: UserService,
    ){}

    async postNewBapyak(req, posting) {
        const newBapyak = {
            userCode: req.user.userId,
            title: posting.title,
            content: posting.content,
            bapyakMode: posting.bapyakMode,
        }
        this.bapYakRepository.insert(newBapyak);
    }

    async showBapyaks(req, serchOption:SerchOption) {
        if(serchOption.gender != "none") {
            if(serchOption.grade != "none") {
                
            }
        }
    }

    async deleteAll() {
        this.bapYakRepository.delete({})
    }
}
