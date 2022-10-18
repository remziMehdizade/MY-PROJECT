import { BaseEntity } from 'src/restapi/base/base.entity';
import { Userinfo } from 'src/restapi/userinfo/entities/userinfo.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ length: 50 })
  username: string;

  @Column({ length: 75 })
  email: string;

  @Column({ length: 50 })
  password: string;

  // @OneToOne(() => Userinfo)
  //   @JoinColumn()
  //   profile: Userinfo;

  @OneToOne(() => Userinfo, (userInfo) => userInfo.user) // specify inverse side as a second parameter
  @JoinColumn()
  userInfo: Userinfo;
}
