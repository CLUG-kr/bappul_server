import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1612739299005 implements MigrationInterface {
    name = 'migration1612739299005'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `mailAddress` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `mailAddress`");
    }

}
