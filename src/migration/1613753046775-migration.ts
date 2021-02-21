import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1613753046775 implements MigrationInterface {
    name = 'migration1613753046775'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bapyak` CHANGE `bapyakMode` `bapyakMode` enum ('inviting', 'join') NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` CHANGE `bapyakMode` `bapyakMode` enum ('none', 'inviting', 'join') NOT NULL");
    }

}
