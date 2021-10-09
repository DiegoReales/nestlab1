import { Test, TestingModule } from '@nestjs/testing';
import { WorkRecordsService } from './work-records.service';

describe('WorkRecordsService', () => {
  let service: WorkRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkRecordsService],
    }).compile();

    service = module.get<WorkRecordsService>(WorkRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
