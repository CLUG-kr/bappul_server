import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Mail } from '../entities/mail.entity'

@Injectable()
export class MailsService {
    constructor(
        @InjectRepository(Mail)
        private usersRepository: Repository<Mail>,
      ) {}
    
    async doublecheckEmail(mail): Promise<string> {
        const connection = getConnection()
        const address: Array<Mail> = await connection
            .createQueryBuilder()
            .select("mail.mailAddress")
            .from(Mail, "mail")
            .getMany()
        
        if(address.find((value)=>value.mailAddress === mail))
            return "false"
        
        else
            return "true"
    }

    async createMailAddress(mail: Mail) {
        this.usersRepository.insert(mail);
    }

    async deleteAll() {
        this.usersRepository.delete({})
    }
}
