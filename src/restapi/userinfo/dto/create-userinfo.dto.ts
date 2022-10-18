import { IsOptional } from 'class-validator';
import { Column } from 'typeorm';

export class CreateUserinfoDto {
  @Column()
  @IsOptional()
  adress: string;
  @Column()
  imageUrl: string;
  @Column()
  phone: string;
  @Column()
  country: string;

}
