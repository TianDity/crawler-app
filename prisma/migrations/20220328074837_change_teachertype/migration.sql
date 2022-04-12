/*
  Warnings:

  - You are about to alter the column `cid` on the `teacher_list` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `teacher_list` MODIFY `cid` INTEGER NOT NULL;
