import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    
    async findAllUsers() {
        return await this.usersRepository.find();
    }

    async findUser(userCode: string): Promise<User> {
        return await this.usersRepository.findOne({'userClassification':userCode});
    }

    async createNewUser(userInfo: User): Promise<void> {
        await this.usersRepository.insert(userInfo);
    }            

    async deleteUser(id: string): Promise<void> {
        await this.usersRepository.delete({'id':id})
    }

    async deleteAll(): Promise<void> {
        await this.usersRepository.delete({})
    }

    async checkSameId(id: string):Promise<string> {
        const connection = getConnection()
        const ids: Array<User> = await connection
            .createQueryBuilder()
            .select("user.id")
            .from(User, "user")
            .getMany()
        if(ids.find((value) => value.id === id)) 
            return "false"
        else
            return "true"
    }
}
