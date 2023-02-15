import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAddressDto{
    
    @IsNotEmpty()
    line1:string;
    
    line2?:string;

    @IsNotEmpty()
    city:string;
    
    @IsNotEmpty()
    state:string;
    
    @IsNotEmpty()
    @IsNumber()
    pincode:number;
}