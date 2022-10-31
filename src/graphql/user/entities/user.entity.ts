import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseEntity } from 'src/graphql/base/base.entity';
import { Userinfo } from 'src/graphql/userinfo/entities/userinfo.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Column({ length: 50 })
  @Field((type) => String)
  username: string;

  @Column({ length: 75 })
  @Field((type) => String)
  email: string;

  @Column({ length: 50 })
  @Field((type) => String)
  password: string;

  // @OneToOne(() => Userinfo)
  //   @JoinColumn()
  //   profile: Userinfo;

  @OneToOne(() => Userinfo, (userInfo) => userInfo.user) // specify inverse side as a second parameter
  @JoinColumn()
  userInfo: Userinfo;
}
