import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createUserDto } from './dto/create-user.dto';
import { User } from './users.models';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User ){
        
    

    }


    async  createUser(dto: createUserDto){
        const user = await this.userRepository.create(dto)
        return user
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll()
        return users
    }
}
