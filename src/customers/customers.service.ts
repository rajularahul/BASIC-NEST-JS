import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreatUser.dto';

@Injectable()
export class CustomersService {
    
    users=[{
        id:1,
        email:"rahul@gmail.com",
        name:"rahul",        
    },
    {
        id:2,
        email:"rah@gmail.com",
        name:"rah",        
    },
    {
        id:3,
        email:"rm@gmail.com",
        name:"rm",        
    }]

    findUser(){
        return this.users;
    }

    findUserById(id:number){
        return this.users.find((user) => user.id===id);
    }

    createCustomer(createUserDto: CreateUserDto){
        this.users.push(createUserDto)
    }

}
