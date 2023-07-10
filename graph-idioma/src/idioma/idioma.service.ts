import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIdiomaInput } from './dto/inputs/create-idioma.input';
import { UpdateIdiomaInput } from './dto/inputs/update-idioma.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Idioma } from './entities/idioma.entity';
import { Repository } from 'typeorm';



@Injectable()
export class IdiomaService {
  constructor( 
    @InjectRepository(Idioma)
    private readonly idiomaRepository:Repository<Idioma> ){}

  async create(createIdiomaInput: CreateIdiomaInput): Promise<Idioma>  {
    const newIdioma= this.idiomaRepository.create(createIdiomaInput);
    return await this.idiomaRepository.save(newIdioma); 
  }

  async findAll(): Promise<Idioma[]> {
    return this.idiomaRepository.find();
  }

  async findOne(id: string): Promise<Idioma> {
     const idioma= await  this.idiomaRepository.findOneBy({id});
     if (!idioma) throw new NotFoundException(`Not found`)
     return idioma;
  }

  async update(id: string, updateIdiomaInput: UpdateIdiomaInput): Promise<Idioma> {
    
    const idioma = await this.idiomaRepository.preload(updateIdiomaInput);
    if (!idioma) throw new NotFoundException(`Not found`)
    return this.idiomaRepository.save(idioma);

  }

  async remove(id: string): Promise<Idioma> {

    const idioma= await  this.findOne(id);
    idioma.estado = false;

    await this.idiomaRepository.update({id}, idioma);

    return idioma;

  }
}
