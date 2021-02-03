import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

    async findUserByStudentId(userId: string): Promise<User> {
        return await this.usersRepository.findOne({id: userId});
    }

    async createNewUser(userInfo: User): Promise<void> {
        await this.usersRepository.insert(userInfo);
    }
}
