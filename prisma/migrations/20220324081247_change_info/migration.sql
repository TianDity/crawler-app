/*
  Warnings:

  - Added the required column `logoKey` to the `Agency_info` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agency_info` ADD COLUMN `logoKey` VARCHAR(191) NOT NULL;
