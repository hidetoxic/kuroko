import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ofetch } from 'ofetch';
import { NotifierService } from './notifier.service';

@Controller('api/notifier')
export class NotifierController {
  constructor(private readonly notifierService: NotifierService) {}

  @Post()
  async sendNotify(@Query() query, @Param() param, @Body() body) {
    const { message, token } = body;

    try {
      const res = await ofetch(
        `https://bark.hidetoxic.tech/${token}/${message}`,
      );
      if (res) {
        return true;
      }
    } catch (error) {
      return false;
    }
  }
}
