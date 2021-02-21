import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1613041217873 implements MigrationInterface {
    name = 'migration1613041217873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `restaurant_comment` (`createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `commentId` varchar(36) NOT NULL, `restaurantId` varchar(255) NOT NULL, `userCode` varchar(255) NOT NULL, `commentContent` longtext NOT NULL, `rating` int NOT NULL, PRIMARY KEY (`commentId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `restaurant` (`restaurantId` varchar(36) NOT NULL, `lat` varchar(255) NOT NULL, `long` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`restaurantId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int(2) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `entranceYear` `entranceYear` int NOT NULL");
        await queryRunner.query("DROP TABLE `restaurant`");
        await queryRunner.query("DROP TABLE `restaurant_comment`");
    }

}
