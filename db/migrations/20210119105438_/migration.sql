/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Memo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Memo" DROP CONSTRAINT "Memo_categoryId_fkey";

-- AlterTable
ALTER TABLE "Memo" DROP COLUMN "categoryId";
