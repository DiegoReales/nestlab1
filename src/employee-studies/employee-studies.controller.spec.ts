import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeStudiesController } from './employee-studies.controller';
import { EmployeeStudiesService } from './employee-studies.service';

describe('EmployeeStudiesController', () => {
  let controller: EmployeeStudiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeStudiesController],
      providers: [EmployeeStudiesService],
    }).compile();

    controller = module.get<EmployeeStudiesController>(EmployeeStudiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
