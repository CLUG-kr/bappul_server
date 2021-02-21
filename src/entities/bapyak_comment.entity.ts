import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class BapyakComment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdDate: string;

    @Column()
    userCode: string;

    @Column()
    ownerPostId: string;

    @Column({type: "longtext"})
    content: string
}