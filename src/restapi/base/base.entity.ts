import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum STATUS {
  ACTIVE = 'ACTIVE',
  DEACTIVE = 'DEACTIVE',
}


export  abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  st_id: number;

  @Column({
    type: 'enum',
    enum: STATUS,
    default: STATUS.ACTIVE,
  })
  isactive: STATUS;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
