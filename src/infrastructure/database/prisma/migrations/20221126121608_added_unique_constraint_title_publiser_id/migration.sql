/*
  Warnings:

  - A unique constraint covering the columns `[title,publisher_id]` on the table `books` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `books_title_key` ON `books`;

-- CreateIndex
CREATE UNIQUE INDEX `books_title_publisher_id_key` ON `books`(`title`, `publisher_id`);
