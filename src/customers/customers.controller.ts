import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common/pipes';
import { Request, Response } from 'express';
import { CreateCustomerDto } from './dto/CreatCustomer.dto';
import { CustomersService } from './customers.service';
import { UsePipes } from '@nestjs/common/decorators';

@Controller('customers')
export class CustomersController {
    constructor(private customerService:CustomersService){}
    @Get('')
    getcustomer(){
        return this.customerService.findcustomer();
    }

    @Get(':id')
    getcustomerById(@Param('id',ParseIntPipe) id:number,@Req() req:Request,@Res() res:Response){
        var customer = this.customerService.findcustomerById(id);
        if(customer){
            res.send(customer);
        }
        else{
            res.status(400).send({msg:"customer not found"});
        }
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createcustomer(@Body() createcustomerDto:CreateCustomerDto){
        this.customerService.createCustomer(createcustomerDto);
    }

}
