import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseEntity } from 'src/graphql/base/base.entity';
import { User } from 'src/graphql/user/entities/user.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@ObjectType()
@Entity()
export class Userinfo extends BaseEntity {
  @Column({ nullable: true })
  @Field()
  adress: string;
  @Column()
  @Field()
  imageUrl: string;
  @Column()
  @Field()
  phone: string;
  @Column()
  @Field((type) => Int)
  country: string;

  @OneToOne(() => User, (user) => user.userInfo) // specify inverse side as a second parameter
  user: User;
}
