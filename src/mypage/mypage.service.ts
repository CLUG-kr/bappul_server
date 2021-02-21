import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Bapyak } from '../entities/bapyak.entity'
import { UserService } from '../users/users.service'

@Injectable()
export class MypageService {
    constructor(
        @InjectRepository(Bapyak)
        private bapYakRepository: Repository<Bapyak>,

        private readonly userService: UserService,
    ){}   

    async getMyBapyaks(userCode:string, requestCount) {
        return await this.bapYakRepository.find({
            order: {
                createdDate: 'DESC'
                },
            skip: (requestCount-1)*20,
            take: 20,
            where: {
                "userCode": userCode
            }
        })
    }
}
