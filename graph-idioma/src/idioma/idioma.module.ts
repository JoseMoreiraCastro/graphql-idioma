import { Module } from '@nestjs/common';
import { IdiomaService } from './idioma.service';
import { Idioma } from './entities/idioma.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdiomaResolver } from './idioma.resolver';


@Module({
  providers: [IdiomaService, IdiomaResolver],
  imports:[
    TypeOrmModule.forFeature([Idioma])
  ]
})
export class IdiomaModule {}
