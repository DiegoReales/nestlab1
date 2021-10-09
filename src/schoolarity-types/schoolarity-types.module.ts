import { Module } from '@nestjs/common';
import { SchoolarityTypesService } from './schoolarity-types.service';
import { SchoolarityTypesController } from './schoolarity-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolarityType } from './entities/schoolarity-type.entity';

const entites = TypeOrmModule.forFeature([SchoolarityType]);

@Module({
  imports: [entites],
  controllers: [SchoolarityTypesController],
  providers: [SchoolarityTypesService]
})
export class SchoolarityTypesModule {}
