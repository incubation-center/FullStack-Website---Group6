import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, description } = req.body;

  const result = await prisma.recipeTest.create({ data: { name, description } });
  res.json(result);
}
