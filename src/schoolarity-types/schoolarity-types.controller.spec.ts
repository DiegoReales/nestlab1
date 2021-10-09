import { Test, TestingModule } from '@nestjs/testing';
import { SchoolarityTypesController } from './schoolarity-types.controller';
import { SchoolarityTypesService } from './schoolarity-types.service';

describe('SchoolarityTypesController', () => {
  let controller: SchoolarityTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolarityTypesController],
      providers: [SchoolarityTypesService],
    }).compile();

    controller = module.get<SchoolarityTypesController>(SchoolarityTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
