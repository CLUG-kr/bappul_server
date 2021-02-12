import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class bapyak {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userCode: string;

  @Column({type: 'longtext'})
  content: string;
}