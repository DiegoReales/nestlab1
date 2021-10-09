import { Module } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { InstitutionsController } from './institutions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from './entities/institution.entity';

const entities = TypeOrmModule.forFeature([Institution]);

@Module({
  imports: [entities],
  controllers: [InstitutionsController],
  providers: [InstitutionsService]
})
export class InstitutionsModule {}
