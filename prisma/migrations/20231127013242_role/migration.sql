/*
  Warnings:

  - The values [GUEST] on the enum `ProfileRole` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProfileRole_new" AS ENUM ('USER', 'OPERATOR', 'ADMIN');
ALTER TYPE "ProfileRole" RENAME TO "ProfileRole_old";
ALTER TYPE "ProfileRole_new" RENAME TO "ProfileRole";
DROP TYPE "ProfileRole_old";
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "ProfileRole" NOT NULL DEFAULT 'USER';
ALTER TABLE "User" ALTER COLUMN "role" TYPE "ProfileRole" USING ("role"::text::"ProfileRole");
COMMIT;


