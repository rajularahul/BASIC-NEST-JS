import { Type } from "class-transformer";
import { IsEmail,IsNotEmpty, IsNumberString,IsNotEmptyObject, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";

export class CreateCustomerDto{
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @IsNumberString()
    id:number;

    @IsNotEmpty()
    name:string;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(()=>CreateAddressDto)
    Address: CreateAddressDto;
}