import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    
    users=[{
        id:1,
        email:"rahul@gmail.com",
        createdAt:new Date(),        
    },
    {
        id:2,
        email:"rah@gmail.com",
        createdAt:new Date(),        
    },
    {
        id:3,
        email:"rm@gmail.com",
        createdAt:new Date(),        
    }]

    findUser(){
        return this.users;
    }

    findUserById(id:number){
        return this.users.find((user) => user.id===id);
    }

}
