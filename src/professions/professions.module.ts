import { Module } from '@nestjs/common';
import { ProfessionsService } from './professions.service';
import { ProfessionsController } from './professions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profession } from './entities/profession.entity';

const entities = TypeOrmModule.forFeature([Profession]);

@Module({
  imports: [entities],
  controllers: [ProfessionsController],
  providers: [ProfessionsService]
})
export class ProfessionsModule {}
