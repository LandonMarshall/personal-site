/*
  Warnings:

  - You are about to drop the column `player1Name` on the `Matchup` table. All the data in the column will be lost.
  - You are about to drop the column `player2Name` on the `Matchup` table. All the data in the column will be lost.
  - Added the required column `matchupName` to the `Matchup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Matchup" DROP COLUMN "player1Name",
DROP COLUMN "player2Name",
ADD COLUMN     "matchupName" TEXT NOT NULL;
