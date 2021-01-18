/*
  Warnings:

  - You are about to drop the column `userId` on the `Memo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Memo" DROP CONSTRAINT "Memo_userId_fkey";

-- AlterTable
ALTER TABLE "Memo" DROP COLUMN "userId";
