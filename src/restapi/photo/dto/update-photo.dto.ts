import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { Profile } from 'src/restapi/profile/entities/profile.entity';
import { CreatePhotoDto } from './create-photo.dto';

export class UpdatePhotoDto extends PartialType(CreatePhotoDto) {


    @IsString()
    name: string;
  
    @IsString()
    imageUrl: string;
  
  
    profileId: Profile;
}
