import { Injectable } from '@nestjs/common';
import { CreateWorkRecordDto } from './dto/create-work-record.dto';
import { UpdateWorkRecordDto } from './dto/update-work-record.dto';

@Injectable()
export class WorkRecordsService {
  create(createWorkRecordDto: CreateWorkRecordDto) {
    return 'This action adds a new workRecord';
  }

  findAll() {
    return `This action returns all workRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workRecord`;
  }

  update(id: number, updateWorkRecordDto: UpdateWorkRecordDto) {
    return `This action updates a #${id} workRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} workRecord`;
  }
}
