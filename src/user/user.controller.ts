import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){

    }

    @Get('/all')
    async all(){
        return this.userService.find();
    }
}
