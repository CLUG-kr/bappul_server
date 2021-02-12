import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1613113272449 implements MigrationInterface {
    name = 'migration1613113272449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `bapyak` (`id` varchar(36) NOT NULL, `userCode` varchar(255) NOT NULL, `content` longtext NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("DROP TABLE `bapyak`");
    }

}
