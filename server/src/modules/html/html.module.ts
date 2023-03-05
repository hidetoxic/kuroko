import { Module } from '@nestjs/common';
import { HtmlService } from './html.service';
import { HtmlController } from './html.controller';

@Module({
  controllers: [HtmlController],
  providers: [HtmlService]
})
export class HtmlModule {}
