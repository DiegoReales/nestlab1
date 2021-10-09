import { Injectable } from '@nestjs/common';
import { CreateSchoolarityTypeDto } from './dto/create-schoolarity-type.dto';
import { UpdateSchoolarityTypeDto } from './dto/update-schoolarity-type.dto';

@Injectable()
export class SchoolarityTypesService {
  create(createSchoolarityTypeDto: CreateSchoolarityTypeDto) {
    return 'This action adds a new schoolarityType';
  }

  findAll() {
    return `This action returns all schoolarityTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schoolarityType`;
  }

  update(id: number, updateSchoolarityTypeDto: UpdateSchoolarityTypeDto) {
    return `This action updates a #${id} schoolarityType`;
  }

  remove(id: number) {
    return `This action removes a #${id} schoolarityType`;
  }
}
