import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1613835955617 implements MigrationInterface {
    name = 'migration1613835955617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
    }

}
