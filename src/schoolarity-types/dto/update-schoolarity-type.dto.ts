import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolarityTypeDto } from './create-schoolarity-type.dto';

export class UpdateSchoolarityTypeDto extends PartialType(CreateSchoolarityTypeDto) {}
