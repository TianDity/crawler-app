/*
  Warnings:

  - A unique constraint covering the columns `[cid]` on the table `About_us` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cid` to the `About_us` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `about_us` ADD COLUMN `cid` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `About_us_cid_key` ON `About_us`(`cid`);
