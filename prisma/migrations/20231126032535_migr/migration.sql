/*
  Warnings:

  - You are about to drop the column `profileId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_profileId_fkey";

-- DropIndex
DROP INDEX "Product_profileId_idx";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "profileId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Profile";

-- CreateIndex
CREATE INDEX "Product_userId_idx" ON "Product"("userId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
