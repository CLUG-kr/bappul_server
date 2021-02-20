import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export enum mode {
  INVITING = "inviting",
  JOIN = "join"
}

@Entity()
export class Bapyak {
  @CreateDateColumn()
  createdDate: string;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userCode: string;

  @Column()
  userName: string;

  @Column()
  userEntranceYear: string;

  @Column()
  userGender: string;

  @Column()
  major: string;

  @Column()
  title: string

  @Column({type: 'longtext'})
  content: string;

  @Column()
  comentNum: number;

  @Column({
    type: "enum",
    enum: mode,
  })
  bapyakMode: mode
}