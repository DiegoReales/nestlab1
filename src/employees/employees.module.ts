import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';

const entities = TypeOrmModule.forFeature([Employee]);

@Module({
  imports: [entities],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
