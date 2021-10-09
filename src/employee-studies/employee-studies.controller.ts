import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeStudiesService } from './employee-studies.service';
import { CreateEmployeeStudyDto } from './dto/create-employee-study.dto';
import { UpdateEmployeeStudyDto } from './dto/update-employee-study.dto';

@Controller('employee-studies')
export class EmployeeStudiesController {
  constructor(private readonly employeeStudiesService: EmployeeStudiesService) {}

  @Post()
  create(@Body() createEmployeeStudyDto: CreateEmployeeStudyDto) {
    return this.employeeStudiesService.create(createEmployeeStudyDto);
  }

  @Get()
  findAll() {
    return this.employeeStudiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeStudiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeStudyDto: UpdateEmployeeStudyDto) {
    return this.employeeStudiesService.update(+id, updateEmployeeStudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeStudiesService.remove(+id);
  }
}
