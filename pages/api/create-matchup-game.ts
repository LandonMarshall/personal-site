import prisma from 'lib/prisma';

export default async function handle(req, res) {
  const { name, matchupId } = req.body;

  const result = await prisma.matchupGame.create({
    data: { name, matchupId },
  });
  res.json(result);
}