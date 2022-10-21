import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserinfoDto } from './dto/create-userinfo.dto';
import { UpdateUserinfoDto } from './dto/update-userinfo.dto';
import { Userinfo } from './entities/userinfo.entity';

@Injectable()
export class UserinfoService {
  constructor(
    @InjectRepository(Userinfo) private UserInfoRepo: Repository<Userinfo>,
  ) {}

  create(createUserinfoDto: CreateUserinfoDto) {
    const usr = this.UserInfoRepo.create(createUserinfoDto);
    return this.UserInfoRepo.save(usr);
  }

  findAll() {
    return `This action returns all userinfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userinfo`;
  }

  update(id: number, updateUserinfoDto: UpdateUserinfoDto) {
    return `This action updates a #${id} userinfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} userinfo`;
  }
}
