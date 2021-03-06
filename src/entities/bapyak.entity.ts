import { timeStamp } from 'console';
import { utimesSync } from 'fs';
import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export enum mode {
  INVITING = "inviting",
  JOIN = "join"
}

@Entity()
export class Bapyak {
  @CreateDateColumn({type: "timestamp"})
  createdDate: string;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userCode: string;

  @Column()
  userName: string;

  @Column()
  userEntranceYear: number;

  @Column()
  userGender: string;

  @Column()
  major: string;

  @Column()
  title: string

  @Column({type: 'longtext'})
  content: string;

  @Column({default: 0})
  comentNum: number;

  @Column({
    type: "enum",
    enum: mode,
  })
  bapyakMode: mode
}