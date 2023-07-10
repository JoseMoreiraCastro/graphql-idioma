import { IsUUID } from 'class-validator';
import { CreateIdiomaInput } from './create-idioma.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';



@InputType()
export class UpdateIdiomaInput extends PartialType(CreateIdiomaInput) {
    @Field(() => ID)
  @IsUUID()
  id: string;
}
