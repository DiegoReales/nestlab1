import { Injectable } from '@nestjs/common';
import { CreateEmployeeStudyDto } from './dto/create-employee-study.dto';
import { UpdateEmployeeStudyDto } from './dto/update-employee-study.dto';

@Injectable()
export class EmployeeStudiesService {
  create(createEmployeeStudyDto: CreateEmployeeStudyDto) {
    return 'This action adds a new employeeStudy';
  }

  findAll() {
    return `This action returns all employeeStudies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeStudy`;
  }

  update(id: number, updateEmployeeStudyDto: UpdateEmployeeStudyDto) {
    return `This action updates a #${id} employeeStudy`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeStudy`;
  }
}
