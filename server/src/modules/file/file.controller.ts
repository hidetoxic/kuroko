import { Controller, Get, Response } from '@nestjs/common';
import { FileService } from './file.service';
import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import config from '../../config';
import { CONFIG_TEMPLATE } from 'src/constants';

@Controller('api/file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get()
  async getHello(@Response() res) {
    const isExist = existsSync(config.configPath);

    if (!isExist) {
      await writeFile(config.configPath, JSON.stringify(CONFIG_TEMPLATE));
    }
    const file = await readFile(config.configPath, { encoding: 'utf-8' });

    res.json(JSON.parse(file));
  }
}
