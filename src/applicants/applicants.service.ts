import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { Applicant } from './entities/applicant.entity';

@Injectable()
export class ApplicantsService {
  constructor(
    @InjectRepository(Applicant) private applicantRepository: Repository<Applicant>,
  ) {}

  create(createApplicantDto: CreateApplicantDto) {
    return 'This action adds a new applicant';
  }

  findAll() {
    return `This action returns all applicants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} applicant`;
  }

  update(id: number, updateApplicantDto: UpdateApplicantDto) {
    return `This action updates a #${id} applicant`;
  }

  remove(id: number) {
    return `This action removes a #${id} applicant`;
  }
}
