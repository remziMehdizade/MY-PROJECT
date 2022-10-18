import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Userinfo } from '../userinfo/entities/userinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Userinfo])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
