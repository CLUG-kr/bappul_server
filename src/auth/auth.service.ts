import { Injectable } from '@nestjs/common';
import { UserService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities/user.entity'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
        ) {}

    async validateUser(id: string, pass: string): Promise<any> {
        const user = await this.usersService.findUserById(id);
        console.log(user)
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User) {
        const payload = { username: user.id, sub: user.userClassification };
        return {
          access_token: this.jwtService.sign(payload),
        };
    }
}
