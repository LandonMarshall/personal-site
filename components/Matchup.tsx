import React, { useState } from "react";
import Button from "@mui/material/Button";
import { getPlayersFromString } from "utils/players-helpers";
import { TextField } from "@mui/material";
import prisma from "lib/prisma";

export type MatchupProps = {
  id: number;
  name: string;
  matchupGames: [{

    id: number,
    name: string,
    player1Record: number,
    player2Record: number,
    matchupId: number,
  }],
};

const Matchup: React.FC<{ matchup: MatchupProps }> = ({ matchup }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [newGameName, setNewGameName] = useState('');
  const [player1, player2] = getPlayersFromString(matchup.name);

  const handleCreateNewGame = async () => {
    await fetch('/api/create-matchup-game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newGameName, matchupId: matchup.id }),
    });
  }

  return (
    <>
      <div>
        {matchup.name}
      </div>
      {matchup.matchupGames.map((game) => (
        <>
          <p key={game.id}>Game: {game.name}</p>
          <p>Record: {`${player1}: ${game.player1Record}`} - {`${player2}: ${game.player2Record}`}</p>
        </>
      ))}
      <form>
        {formVisible && <TextField label="Name" value={newGameName} onChange={(e) => setNewGameName(e.target.value)} variant="outlined" />}
        {formVisible && <Button onClick={handleCreateNewGame} variant="contained">Submit</Button>}
        {!formVisible && <Button onClick={() => setFormVisible(true)} variant="contained">Add new game</Button>}
      </form>
    </>
  );
}

export default Matchup;
