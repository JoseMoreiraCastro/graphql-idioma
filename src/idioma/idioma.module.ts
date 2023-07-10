import { Module } from '@nestjs/common';
import { IdiomaService } from './idioma.service';
import { IdiomaResolver } from './idioma.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Idioma } from './entities/idioma.entity';



@Module({
  providers: [IdiomaService, IdiomaResolver],
  imports:[
    TypeOrmModule.forFeature([Idioma]),
    IdiomaModule
  ]
})
export class IdiomaModule {}
