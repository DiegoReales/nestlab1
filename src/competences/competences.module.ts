import { Module } from '@nestjs/common';
import { CompetencesService } from './competences.service';
import { CompetencesController } from './competences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Competence, EmployeeCompetence } from './entities/competence.entity';

const entities = TypeOrmModule.forFeature([Competence, EmployeeCompetence]);

@Module({
  imports: [entities],
  controllers: [CompetencesController],
  providers: [CompetencesService]
})
export class CompetencesModule {}
