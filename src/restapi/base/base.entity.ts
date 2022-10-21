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

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
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
