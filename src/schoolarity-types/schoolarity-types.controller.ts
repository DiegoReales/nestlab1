import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchoolarityTypesService } from './schoolarity-types.service';
import { CreateSchoolarityTypeDto } from './dto/create-schoolarity-type.dto';
import { UpdateSchoolarityTypeDto } from './dto/update-schoolarity-type.dto';

@Controller('schoolarity-types')
export class SchoolarityTypesController {
  constructor(private readonly schoolarityTypesService: SchoolarityTypesService) {}

  @Post()
  create(@Body() createSchoolarityTypeDto: CreateSchoolarityTypeDto) {
    return this.schoolarityTypesService.create(createSchoolarityTypeDto);
  }

  @Get()
  findAll() {
    return this.schoolarityTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolarityTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolarityTypeDto: UpdateSchoolarityTypeDto) {
    return this.schoolarityTypesService.update(+id, updateSchoolarityTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolarityTypesService.remove(+id);
  }
}
