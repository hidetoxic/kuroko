import { PartialType } from '@nestjs/mapped-types';
import { CreateNotifierDto } from './create-notifier.dto';

export class UpdateNotifierDto extends PartialType(CreateNotifierDto) {}
