import { IsArray, IsString } from 'class-validator';
import { Photo } from 'src/restapi/photo/entities/photo.entity';

export class CreateProfileDto {
  @IsString()
  name: string;

  @IsArray()
  photos: Photo[];
}
