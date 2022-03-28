/*
  Warnings:

  - You are about to drop the column `status` on the `agency_info` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cid]` on the table `Agency_info` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cid` to the `Agency_info` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agency_info` DROP COLUMN `status`,
    ADD COLUMN `cid` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Agency_info_cid_key` ON `Agency_info`(`cid`);
