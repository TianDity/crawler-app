/*
  Warnings:

  - You are about to alter the column `cid` on the `course_type` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `course_type` MODIFY `cid` INTEGER NOT NULL;
