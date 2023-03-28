import React from "react";
import Layout from "components/Layout";
import Button from "@mui/material/Button";

const RecordTracker: React.FC = (props) => {
  return (
    <Layout>
      <div>
        To track records: create a new matchup, and then go to /record-tracker/player1-vs-player2 to see all games
      </div>
      <Button variant="contained">Create new matchup</Button>
    </Layout>
  );
}

export default RecordTracker;
