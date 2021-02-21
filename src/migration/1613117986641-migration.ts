import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1613117986641 implements MigrationInterface {
    name = 'migration1613117986641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bapyak` ADD `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` DROP COLUMN `createdDate`");
    }

}
