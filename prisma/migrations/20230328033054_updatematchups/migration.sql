/*
  Warnings:

  - You are about to drop the column `matchupName` on the `Matchup` table. All the data in the column will be lost.
  - Added the required column `name` to the `Matchup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Matchup" DROP COLUMN "matchupName",
ADD COLUMN     "name" TEXT NOT NULL;
