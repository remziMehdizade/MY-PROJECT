import { IsString } from "class-validator";
import { Profile } from "src/restapi/profile/entities/profile.entity";

export class CreatePhotoDto {
  @IsString()
  name: string;

  @IsString()
  imageUrl: string;


  profile: Profile;
}
