import { Exclude } from "class-transformer";

export interface User{
    Username: string;
    Password: string;
}

export class SerialzedUser{
    Username: string;

    @Exclude()
    Password: string;

    constructor(partial: Partial<SerialzedUser>){
        Object.assign(this, partial);
    }
}