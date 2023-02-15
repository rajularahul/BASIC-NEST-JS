import { Injectable } from '@nestjs/common';
import { CreatecustomerDto } from './dto/Creatcustomer.dto';

@Injectable()
export class CustomersService {
    
    customers=[{
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

    findcustomer(){
        return this.customers;
    }

    findcustomerById(id:number){
        return this.customers.find((customer) => customer.id===id);
    }

    createCustomer(createcustomerDto: CreatecustomerDto){
        this.customers.push(createcustomerDto)
    }

}
