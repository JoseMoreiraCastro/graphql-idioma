import { PartialType } from '@nestjs/mapped-types';
import { CreateIdiomaInput } from './create-idioma.input';
import { Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';



export class UpdateIdiomaInput extends PartialType(CreateIdiomaInput) {
    @Field(() => ID)
  @IsUUID()
  id: string;
}