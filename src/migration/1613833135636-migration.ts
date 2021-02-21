import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1613833135636 implements MigrationInterface {
    name = 'migration1613833135636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `bapyak_comment` (`id` varchar(36) NOT NULL, `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `userCode` varchar(255) NOT NULL, `ownerPostId` varchar(255) NOT NULL, `content` longtext NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("DROP TABLE `bapyak_comment`");
    }

}
