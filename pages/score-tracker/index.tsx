import React from "react";
import { GetStaticProps } from "next";
import prisma from '../../lib/prisma';
import Layout from "../../components/Layout";

const ScoreTracker: React.FC = (props) => {
  return (
    <Layout>
      <div>
        To track scores: create a new matchup, and then go to /score-tracker/player1-vs-player2 to see all games
      </div>
      <div>
      </div>
    </Layout>
  );
}

export default ScoreTracker;
