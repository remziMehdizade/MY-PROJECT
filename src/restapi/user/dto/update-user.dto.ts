import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { Userinfo } from 'src/restapi/userinfo/entities/userinfo.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  password: string;

  @IsNotEmpty()
  userInfo: Userinfo;
}
