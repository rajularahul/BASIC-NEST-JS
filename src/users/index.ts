import { Exclude } from "class-transformer";

export interface User{
    id:number;
    Username: string;
    Password: string;
}

export class SerialzedUser{
    id:number;
    Username: string;

    @Exclude()
    Password: string;

    constructor(partial: Partial<SerialzedUser>){
        Object.assign(this, partial);
    }
}