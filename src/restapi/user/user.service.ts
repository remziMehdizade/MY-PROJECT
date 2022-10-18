import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Userinfo } from '../userinfo/entities/userinfo.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Userinfo)
    private userinfoRepository: Repository<Userinfo>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const usri = new Userinfo();
    usri.adress = createUserDto.userInfo.adress;
    usri.imageUrl = createUserDto.userInfo.imageUrl;
    usri.phone = createUserDto.userInfo.phone;
    usri.country = createUserDto.userInfo.country;

    await this.userinfoRepository.save(usri);

    const usr = new User();
    usr.username = createUserDto.username;
    usr.email = createUserDto.email;
    usr.password = createUserDto.password;
    usr.userInfo = usri;
    

    return this.userRepository.save(usr);
  }

  findAll() {
    return this.userRepository.find({ relations: { userInfo: true } });
  }

  async findOne(id: number) {
    const result= await this.userRepository.findOne({
      where: { id },
      relations: { userInfo: true },///['userInfo'],
    });

    if(!result){
      throw new NotFoundException("User Not Found!!!!!!!1");
    }
    return result;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
