import React from "react";
import { GetServerSideProps } from "next";
import prisma from "lib/prisma";
import Layout from "components/Layout";
import MatchupGame, { MatchupGameProps } from "components/MatchupGame";
import { sortPlayersString } from "utils/players-helpers";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const sortedPlayers = sortPlayersString(params.matchup as string);

  const matchup = await prisma.matchup.findFirst({
    where: {
      name: sortedPlayers,
    },
    include: {
      matchupGames: true,
    },
  });

  const matchupGame = await prisma.matchupGame.findFirst({
    where: {
      name: params.game as string,
      matchupId: matchup.id
    },
    include: {
      matchup: true,
    },
  });
  return { notFound: !matchupGame, props: { matchupGame } }
}

const MatchupGameEntry: React.FC<{ matchupGame: MatchupGameProps }> = ({ matchupGame }) => {
  return (
    <Layout>
      <MatchupGame matchupGame={matchupGame} />
    </Layout>
  );
}

export default MatchupGameEntry;
