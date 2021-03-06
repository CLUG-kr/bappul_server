import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    userClassification: string;

    @Column()
    id: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    department: string;

    @Column()
    entranceYear: number;

    @Column()
    gender: string;

    @Column()
    mailAddress: string;

    @Column({default: false})
    isAdmin: boolean;
}