import React from "react";
import Button from "@mui/material/Button";
import { getPlayersFromString } from "utils/players-helpers";

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
      <div>
        {matchupGame.name}
      </div>
      <div>
        {`${player1}: ${player1Score} - ${player2}: ${player2Score}`}
      </div>
      <Button variant="contained">Edit score</Button>
    </>
  );
}

export default MatchupGame;
