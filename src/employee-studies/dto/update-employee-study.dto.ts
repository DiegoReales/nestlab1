import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeStudyDto } from './create-employee-study.dto';

export class UpdateEmployeeStudyDto extends PartialType(CreateEmployeeStudyDto) {}
