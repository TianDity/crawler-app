/*
  Warnings:

  - Added the required column `cid` to the `Slider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `slider` ADD COLUMN `cid` INTEGER NOT NULL;
