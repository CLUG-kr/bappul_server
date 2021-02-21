import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1613752220292 implements MigrationInterface {
    name = 'migration1613752220292'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bapyak` ADD `userGender` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` ADD `major` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` CHANGE `bapyakMode` `bapyakMode` enum ('none', 'inviting', 'join') NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` CHANGE `bapyakMode` `bapyakMode` enum ('inviting', 'join') NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` DROP COLUMN `major`");
        await queryRunner.query("ALTER TABLE `bapyak` DROP COLUMN `userGender`");
    }

}
