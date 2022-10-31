import { Injectable } from '@nestjs/common';
import { CreateUserinfoInput } from './dto/create-userinfo.input';
import { UpdateUserinfoInput } from './dto/update-userinfo.input';

@Injectable()
export class UserinfoService {
  create(createUserinfoInput: CreateUserinfoInput) {
    return 'This action adds a new userinfo';
  }

  findAll() {
    return `This action returns all userinfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userinfo`;
  }

  update(id: number, updateUserinfoInput: UpdateUserinfoInput) {
    return `This action updates a #${id} userinfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} userinfo`;
  }
}
