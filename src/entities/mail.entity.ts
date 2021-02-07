import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mail {
  @PrimaryGeneratedColumn('uuid')
  userClassification: string;

  @Column()
  ownerId: string;

  @Column()
  mailAddress: string;
}