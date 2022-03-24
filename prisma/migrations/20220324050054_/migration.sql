/*
  Warnings:

  - A unique constraint covering the columns `[cid]` on the table `Slider` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `slider` MODIFY `cid` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Slider_cid_key` ON `Slider`(`cid`);
