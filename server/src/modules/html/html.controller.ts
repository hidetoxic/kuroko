import { Controller, Get, Response } from '@nestjs/common';
import { join } from 'path';
import { HtmlService } from './html.service';

@Controller()
export class HtmlController {
  constructor(private readonly htmlService: HtmlService) {}

  @Get('')
  sendIndexHtml(@Response() res) {
    const _index = join(__dirname, '../../client/dist', 'index.html');

    res.sendFile(_index);

    return true;
  }
}
