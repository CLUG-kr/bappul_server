import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1614008827376 implements MigrationInterface {
    name = 'migration1614008827376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bapyak` DROP COLUMN `createdDate`");
        await queryRunner.query("ALTER TABLE `bapyak` ADD `createdDate` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bapyak` DROP COLUMN `createdDate`");
        await queryRunner.query("ALTER TABLE `bapyak` ADD `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

}
