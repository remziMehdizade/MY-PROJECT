import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotoService {
  constructor(@InjectRepository(Photo) private photoRepo: Repository<Photo>) {}

  async create(createPhotoDto: CreatePhotoDto) {
    const photo = await this.photoRepo.create(createPhotoDto);
    return this.photoRepo.save(photo);
  }

  async findAll() {
    return await this.photoRepo.find({ relations: { profile: true } });
  }

  async findOne(id: number) {
    return await this.photoRepo.findOne({
      where: { id},
      relations: { profile: true },
    });
  }

 async  update(id: number, updatePhotoDto: UpdatePhotoDto) {

    const photo = await this.photoRepo.findOne({
      where: { id },
      relations: { profile: true }, ///['userInfo'],
    });



    if (!photo) {
      throw new NotFoundException();
    }

    await this.photoRepo.merge(photo, {
      name: updatePhotoDto.name,
      imageUrl: updatePhotoDto.imageUrl,
      profile:updatePhotoDto.profile
    });
    return this.photoRepo.save(photo);
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
