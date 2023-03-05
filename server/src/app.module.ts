import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HtmlModule } from './modules/html/html.module';
import { FileModule } from './modules/file/file.module';
import { NotifierModule } from './modules/notifier/notifier.module';

@Module({
  imports: [HtmlModule, FileModule, NotifierModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
