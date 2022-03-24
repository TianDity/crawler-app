-- CreateTable
CREATE TABLE `Recom_course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cid` VARCHAR(191) NOT NULL,
    `href` VARCHAR(191) NOT NULL,
    `mainTitle` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `posterUrl` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `teacherImg` VARCHAR(191) NOT NULL,
    `teacherName` VARCHAR(191) NOT NULL,
    `studentCount` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `posterKey` VARCHAR(191) NOT NULL,
    `teacherImgKey` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Recom_course_cid_key`(`cid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
