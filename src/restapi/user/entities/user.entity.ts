import { BaseEntity } from 'src/restapi/base/base.entity';
import { Column, Entity } from 'typeorm';


@Entity()
export class User extends BaseEntity{

  @Column({ length: 50 })
  username: string;

  @Column({ length: 75 })
  email: string;
  @Column({ length: 50 })
  password: string;
}
