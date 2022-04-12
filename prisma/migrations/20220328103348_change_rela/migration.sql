-- DropForeignKey
ALTER TABLE `course_list` DROP FOREIGN KEY `Course_list_typeID_fkey`;

-- AddForeignKey
ALTER TABLE `Course_list` ADD CONSTRAINT `Course_list_typeID_fkey` FOREIGN KEY (`typeID`) REFERENCES `Course_type`(`cid`) ON DELETE RESTRICT ON UPDATE CASCADE;
