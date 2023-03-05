import { Test, TestingModule } from '@nestjs/testing';
import { NotifierController } from './notifier.controller';
import { NotifierService } from './notifier.service';

describe('NotifierController', () => {
  let controller: NotifierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotifierController],
      providers: [NotifierService],
    }).compile();

    controller = module.get<NotifierController>(NotifierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
