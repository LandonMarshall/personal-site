import React from "react";
import Layout from "components/Layout";
import AboveFold from "features/landing-page/components/AboveFold";
import AboutMe from "features/landing-page/components/AboutMe";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="page">
        <AboveFold />
        <AboutMe />
      </div>
      <style jsx global>{`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: 'Outfit';
      font-display: block;
    }

    * {
      box-sizing: border-box;
    }
  `}</style>
    </Layout>
  )
}

export default Home;
