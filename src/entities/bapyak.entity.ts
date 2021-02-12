import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum mode {
  INVITING = "inviting",
  JOIN = "join"
}

@Entity()
export class Bapyak {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userCode: string;

  @Column({type: 'longtext'})
  content: string;

  @Column({
    type: "enum",
    enum: mode,
  })
  position: mode
}