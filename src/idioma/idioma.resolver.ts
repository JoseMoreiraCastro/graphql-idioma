import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { IdiomaService } from './idioma.service';
import { Idioma } from './entities/idioma.entity';
import { UpdateIdiomaInput, CreateIdiomaInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Idioma)
export class IdiomaResolver {
  constructor(private readonly idiomaService: IdiomaService) {}

  @Mutation(() => Idioma)
  async createIdioma(@Args('createIdiomateInput') createIdiomateInput: CreateIdiomaInput)
  :Promise<Idioma> {
    return this.idiomaService.create(createIdiomateInput);
  }

  @Query(() => [Idioma], { name: 'idiomas' })
  async findAll():Promise<Idioma[]> {
    return this.idiomaService.findAll();
  }

  @Query(() => Idioma, { name: 'idioma' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Idioma> {
    return this.idiomaService.findOne(id);
  }

  @Mutation(() => Idioma)
  updateIdioma(@Args('updateIdiomaInput') updateIdiomaInput: UpdateIdiomaInput): Promise<Idioma> {
    return this.idiomaService.update(updateIdiomaInput.id, updateIdiomaInput);
  }

  @Mutation(() => Idioma)
  removeIdioma(@Args('id', { type: () => ID }, ParseUUIDPipe) id: string): Promise<Idioma> {
    return this.idiomaService.remove(id);
  }
}
