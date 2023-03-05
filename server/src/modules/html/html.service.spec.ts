import { Test, TestingModule } from '@nestjs/testing';
import { HtmlService } from './html.service';

describe('HtmlService', () => {
  let service: HtmlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HtmlService],
    }).compile();

    service = module.get<HtmlService>(HtmlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
