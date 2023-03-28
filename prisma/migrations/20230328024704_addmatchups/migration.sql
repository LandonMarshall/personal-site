/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Matchup" (
    "id" SERIAL NOT NULL,
    "player1Name" TEXT NOT NULL,
    "player2Name" TEXT NOT NULL,

    CONSTRAINT "Matchup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchupGame" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "player1Score" INTEGER NOT NULL,
    "player2Score" INTEGER NOT NULL,
    "matchupId" INTEGER NOT NULL,

    CONSTRAINT "MatchupGame_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MatchupGame" ADD CONSTRAINT "MatchupGame_matchupId_fkey" FOREIGN KEY ("matchupId") REFERENCES "Matchup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
