import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Userinfo } from 'src/restapi/userinfo/entities/userinfo.entity';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
  @IsNotEmpty()
  userInfo: Userinfo;
}
