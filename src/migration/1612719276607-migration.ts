import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1612719276607 implements MigrationInterface {
    name = 'migration1612719276607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `gender`");
        await queryRunner.query("ALTER TABLE `user` ADD `gender` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `gender`");
        await queryRunner.query("ALTER TABLE `user` ADD `gender` enum ('man', 'woman') NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
    }

}
