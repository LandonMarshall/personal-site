import prisma from 'lib/prisma';

export default async function handle(req, res) {
  const { players } = req.body;

  const result = await prisma.matchup.findFirst({
    where: {
      name: players,
    },
    include: {
      matchupGames: true,
    },
  });
  res.json(result);
}