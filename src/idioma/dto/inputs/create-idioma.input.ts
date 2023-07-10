import { IsString, IsNotEmpty } from 'class-validator';


export class CreateIdiomaInput {
    @IsString()
  @IsNotEmpty()
  identificacion:string;

  @IsString()
  @IsNotEmpty()
  nombre:string;
}
