import { Profile } from 'src/restapi/profile/entities/profile.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imageUrl: string;

  @ManyToOne(() => Profile, (profile) => profile.photos, {
    cascade: [ 'insert','remove'],
    nullable:false
  })
  profile: Profile;
}
