/*
  Warnings:

  - Added the required column `teacherHref` to the `Teacher_list` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `teacher_list` ADD COLUMN `teacherHref` VARCHAR(191) NOT NULL;
