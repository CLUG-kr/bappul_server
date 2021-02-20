import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1613844226391 implements MigrationInterface {
    name = 'migration1613844226391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bapyak` CHANGE `comentNum` `comentNum` int NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` CHANGE `comentNum` `comentNum` int NOT NULL");
    }

}
