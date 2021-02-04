import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1612413649983 implements MigrationInterface {
    name = 'migration1612413649983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`userClassification` varchar(36) NOT NULL, `id` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `entranceYear` int(2) NOT NULL, `gender` enum ('man', 'woman') NOT NULL, PRIMARY KEY (`userClassification`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
