import { Injectable } from '@nestjs/common';
import { User } from './user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){
    }

    async save(options){
        return this.userRepository.save(options);
    }

    async find() {
        return this.userRepository.find();
    }
}
