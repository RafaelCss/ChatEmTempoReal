/*
  Warnings:

  - Added the required column `email` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Message_id_key` ON `message`;

-- AlterTable
ALTER TABLE `message` ADD COLUMN `email` VARCHAR(255) NOT NULL;
