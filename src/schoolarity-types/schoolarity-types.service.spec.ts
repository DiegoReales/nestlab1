import { Test, TestingModule } from '@nestjs/testing';
import { SchoolarityTypesService } from './schoolarity-types.service';

describe('SchoolarityTypesService', () => {
  let service: SchoolarityTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolarityTypesService],
    }).compile();

    service = module.get<SchoolarityTypesService>(SchoolarityTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
