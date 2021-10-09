import { Test, TestingModule } from '@nestjs/testing';
import { WorkRecordsController } from './work-records.controller';
import { WorkRecordsService } from './work-records.service';

describe('WorkRecordsController', () => {
  let controller: WorkRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkRecordsController],
      providers: [WorkRecordsService],
    }).compile();

    controller = module.get<WorkRecordsController>(WorkRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
