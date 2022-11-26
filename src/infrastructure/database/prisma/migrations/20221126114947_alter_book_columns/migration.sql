/*
  Warnings:

  - You are about to drop the column `publisherId` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `releaseYear` on the `books` table. All the data in the column will be lost.
  - Added the required column `publisher_id` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `release_year` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `books_publisherId_fkey`;

-- AlterTable
ALTER TABLE `books` DROP COLUMN `publisherId`,
    DROP COLUMN `releaseYear`,
    ADD COLUMN `publisher_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `release_year` YEAR NOT NULL;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_publisher_id_fkey` FOREIGN KEY (`publisher_id`) REFERENCES `publishers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
