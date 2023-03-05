import { PartialType } from '@nestjs/mapped-types';
import { CreateHtmlDto } from './create-html.dto';

export class UpdateHtmlDto extends PartialType(CreateHtmlDto) {}
