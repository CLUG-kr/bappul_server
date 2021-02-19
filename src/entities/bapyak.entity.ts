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
  title: string

  @Column({type: 'longtext'})
  content: string;

  @Column({
    type: "enum",
    enum: mode,
  })
  bapyakMode: mode
}