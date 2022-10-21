import { BaseEntity } from 'src/restapi/base/base.entity';
import { User } from 'src/restapi/user/entities/user.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity()
export class Userinfo extends BaseEntity {
  @Column({nullable:true})
  adress: string;
  @Column()
  imageUrl: string;
  @Column()
  phone: string;
  @Column()
  country: string;

  @OneToOne(() => User, (user) => user.userInfo) // specify inverse side as a second parameter
  user: User;
}
