import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1613755329701 implements MigrationInterface {
    name = 'migration1613755329701'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bapyak` ADD `userName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` ADD `userEntranceYear` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` DROP COLUMN `userEntranceYear`");
        await queryRunner.query("ALTER TABLE `bapyak` DROP COLUMN `userName`");
    }

}
