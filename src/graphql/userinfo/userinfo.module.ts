import { Module } from '@nestjs/common';
import { UserinfoService } from './userinfo.service';
import { UserinfoResolver } from './userinfo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userinfo } from './entities/userinfo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Userinfo])],
  providers: [UserinfoResolver, UserinfoService]
})
export class UserinfoModule {}
