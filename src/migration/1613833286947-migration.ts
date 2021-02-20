import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1613833286947 implements MigrationInterface {
    name = 'migration1613833286947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bapyak` ADD `comentNum` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("ALTER TABLE `bapyak` DROP COLUMN `comentNum`");
    }

}
