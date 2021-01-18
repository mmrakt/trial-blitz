-- AlterTable
ALTER TABLE "Memo" ADD COLUMN     "categoryId" INTEGER;

-- CreateTable
CREATE TABLE "Category" (
"id" SERIAL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Memo" ADD FOREIGN KEY("categoryId")REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
