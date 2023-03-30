import React from "react";
import Button from "@mui/material/Button";
import { getPlayersFromString } from "utils/players-helpers";
import Typography from "@mui/material/Typography";

export type MatchupGameProps = {
  id: number;
  name: string;
  player1Score: number,
  player2Score: number,
  matchup: {
    id: number,
    name: string,
  },
};

const MatchupGame: React.FC<{ matchupGame: MatchupGameProps }> = ({ matchupGame }) => {
  const { player1Score, player2Score } = matchupGame;
  const [player1, player2] = getPlayersFromString(matchupGame.matchup.name);
  return (
    <>
      <Typography>
        {matchupGame.name}
      </Typography>
      <Typography>
        {`${player1}: ${player1Score} - ${player2}: ${player2Score}`}
      </Typography>
      <Button variant="contained">Edit score</Button>
    </>
  );
}

export default MatchupGame;
