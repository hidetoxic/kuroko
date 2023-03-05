import { Injectable } from '@nestjs/common';
import { CreateHtmlDto } from './dto/create-html.dto';
import { UpdateHtmlDto } from './dto/update-html.dto';

@Injectable()
export class HtmlService {
  create(createHtmlDto: CreateHtmlDto) {
    return 'This action adds a new html';
  }

  findAll() {
    return `This action returns all html`;
  }

  findOne(id: number) {
    return `This action returns a #${id} html`;
  }

  update(id: number, updateHtmlDto: UpdateHtmlDto) {
    return `This action updates a #${id} html`;
  }

  remove(id: number) {
    return `This action removes a #${id} html`;
  }
}
