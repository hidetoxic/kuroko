import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import config from './config';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 启动静态服务器 响应 /html/** 的资源
  app.useStaticAssets(join(__dirname, '../../client', 'dist'), {
    prefix: '/html/', // 虚拟名称 http://localhost:3010/static/...png
  });

  await app.listen(config.port);
}

bootstrap();
