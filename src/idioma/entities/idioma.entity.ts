import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'idioma'})
@ObjectType()
export class Idioma {
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=> String)
    identificacion:string;

    @Column()
    @Field(()=>String)
    nombre:string;

    @Column()
    @Field(()=>Boolean)
    estado:boolean;
}
