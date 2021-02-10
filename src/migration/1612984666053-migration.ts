import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1612984666053 implements MigrationInterface {
    name = 'migration1612984666053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `isAdmin` tinyint NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `isAdmin`");
    }

}
