import { Injectable } from '@nestjs/common';
import { CreateNotifierDto } from './dto/create-notifier.dto';
import { UpdateNotifierDto } from './dto/update-notifier.dto';

@Injectable()
export class NotifierService {
  create(createNotifierDto: CreateNotifierDto) {
    return 'This action adds a new notifier';
  }

  findAll() {
    return `This action returns all notifier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notifier`;
  }

  update(id: number, updateNotifierDto: UpdateNotifierDto) {
    return `This action updates a #${id} notifier`;
  }

  remove(id: number) {
    return `This action removes a #${id} notifier`;
  }
}
