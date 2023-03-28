export const sortPlayersString = (playersString: string): string => {
  const players = playersString;
  const splitPlayers = players.split('-');
  splitPlayers.splice(1, 1);
  return splitPlayers.sort().join('-vs-');
}

export const getPlayersFromString = (playersString: string): [string, string] => {
  const splitPlayers = playersString.split('-');
  return [splitPlayers[0], splitPlayers[2]];
}