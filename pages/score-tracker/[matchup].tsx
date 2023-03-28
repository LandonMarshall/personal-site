import React from "react";
import { GetStaticProps } from "next";
import prisma from '../../lib/prisma';
import Layout from "../../components/Layout";
import { useRouter } from 'next/router';

export const getStaticProps: GetStaticProps = async () => {
  const router = useRouter();
  console.log(router.query.matchup);
  // const feed = await prisma.matchupGame.findMany({
  //   where: { name: true },
  //   include: {
  //     author: {
  //       select: { name: true },
  //     },
  //   },
  // });
  return {
    props: { },
  };
};

const ScoreTracker: React.FC = (props) => {
  return (
    <Layout>
      <div>
        Games you have to play:
      </div>
      <div>
        insert games here
      </div>
    </Layout>
  );
}

export default ScoreTracker;
