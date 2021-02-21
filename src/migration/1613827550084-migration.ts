import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1613827550084 implements MigrationInterface {
    name = 'migration1613827550084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bapyak` CHANGE `id` `bapyakId` varchar(36) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` CHANGE `bapyakId` `id` varchar(36) NOT NULL");
    }

}
