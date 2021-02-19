import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1613669338539 implements MigrationInterface {
    name = 'migration1613669338539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bapyak` DROP COLUMN `position`");
        await queryRunner.query("ALTER TABLE `bapyak` ADD `title` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` ADD `bapyakMode` enum ('inviting', 'join') NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` DROP COLUMN `bapyakMode`");
        await queryRunner.query("ALTER TABLE `bapyak` DROP COLUMN `title`");
        await queryRunner.query("ALTER TABLE `bapyak` ADD `position` enum ('inviting', 'join') NOT NULL");
    }

}
