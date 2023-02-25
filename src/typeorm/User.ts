import { Column } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',        
    })
    id:number;

    @Column({
        name:'UserName',
        nullable:true,
        unique:true,
    })
    username: string;

    @Column({
        name:'emailAddress',
        nullable:true,
    })
    email: string;
    
    @Column({
        name:'Password',   
        nullable:true,
    })
    password: string;
}

