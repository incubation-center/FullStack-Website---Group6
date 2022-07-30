import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const users = await prisma.recipe.findMany();
  res.status(200).json(users);
}
