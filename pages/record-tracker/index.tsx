import React from "react";
import Layout from "components/Layout";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const RecordTracker: React.FC = (props) => {
  return (
    <Layout>
      <Typography>
        To track records: create a new matchup, and then go to /record-tracker/player1-vs-player2 to see all games
      </Typography>
      <Button variant="contained">Create new matchup</Button>
    </Layout>
  );
}

export default RecordTracker;
