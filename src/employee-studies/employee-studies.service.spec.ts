import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeStudiesService } from './employee-studies.service';

describe('EmployeeStudiesService', () => {
  let service: EmployeeStudiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeStudiesService],
    }).compile();

    service = module.get<EmployeeStudiesService>(EmployeeStudiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
