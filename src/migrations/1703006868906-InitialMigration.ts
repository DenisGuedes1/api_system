import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1703006868906 implements MigrationInterface {
    name = 'InitialMigration1703006868906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Menu" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "options" text array NOT NULL, "price" numeric(10,2) NOT NULL, "drinks" text array NOT NULL, "additional" text array NOT NULL, "sizeId" uuid, CONSTRAINT "PK_b2683c330c5e6d700266a6f46d0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Size" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "size" character varying NOT NULL, CONSTRAINT "PK_2a370d6ce0ec366a420059489e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name_fantasy" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "avatar" character varying, "isAdmin" boolean NOT NULL, "reset_token" text, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Menu" ADD CONSTRAINT "FK_ed723c15619cf55184ceaf31a4c" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Menu" DROP CONSTRAINT "FK_ed723c15619cf55184ceaf31a4c"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Size"`);
        await queryRunner.query(`DROP TABLE "Menu"`);
    }

}
