import { Module } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { ApplicantsController } from './applicants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Applicant } from './entities/applicant.entity';

const entities = TypeOrmModule.forFeature([Applicant]);

@Module({
  imports: [entities],
  controllers: [ApplicantsController],
  providers: [ApplicantsService]
})
export class ApplicantsModule {}
