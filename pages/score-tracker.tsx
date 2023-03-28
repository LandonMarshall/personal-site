import React from "react";
import { GetStaticProps } from "next";
import prisma from '../lib/prisma';
import Layout from "../components/Layout";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
}

const ScoreTracker: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div>
        Player 1
      </div>
      <div>
        Player 2
      </div>
    </Layout>
  );
}

export default ScoreTracker;
