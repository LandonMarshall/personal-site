import React from "react";
import { GetServerSideProps } from "next";
import prisma from "lib/prisma";
import Layout from "components/Layout";
import Matchup, { MatchupProps } from "components/Matchup";
import { sortPlayersString } from "utils/players-helpers";


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const players = sortPlayersString(params.matchup as string);

  const matchup = await prisma.matchup.findFirst({
    where: {
      name: players,
    },
    include: {
      matchupGames: true,
    },
  });
  return { notFound: !matchup, props: { matchup } }
}

const MatchupEntry: React.FC<{ matchup: MatchupProps }> = ({ matchup }) => {
  return (
    <Layout>
      <Matchup matchup={matchup} />
    </Layout>
  );
}

export default MatchupEntry;
