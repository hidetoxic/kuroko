import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HtmlModule } from './modules/html/html.module';

@Module({
  imports: [HtmlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
