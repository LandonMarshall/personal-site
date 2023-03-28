import React from "react"
import { GetStaticProps } from "next"
import Layout from "components/Layout"
import prisma from 'lib/prisma';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="page">
        <h1>Landon Marshall</h1>
        <main>
          Hi my name is Landon
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Home;
