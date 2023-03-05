import { Module } from '@nestjs/common';
import { NotifierService } from './notifier.service';
import { NotifierController } from './notifier.controller';

@Module({
  controllers: [NotifierController],
  providers: [NotifierService],
})
export class NotifierModule {}
