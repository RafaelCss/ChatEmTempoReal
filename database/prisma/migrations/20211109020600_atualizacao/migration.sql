/*
  Warnings:

  - You are about to drop the column `authorId` on the `message` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_authorId_fkey`;

-- AlterTable
ALTER TABLE `message` DROP COLUMN `authorId`;

-- CreateTable
CREATE TABLE `_CadastroToMessage` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CadastroToMessage_AB_unique`(`A`, `B`),
    INDEX `_CadastroToMessage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CadastroToMessage` ADD FOREIGN KEY (`A`) REFERENCES `Cadastro`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CadastroToMessage` ADD FOREIGN KEY (`B`) REFERENCES `Message`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
