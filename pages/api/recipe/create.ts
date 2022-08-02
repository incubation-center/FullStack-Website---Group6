import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../lib/prisma';


export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, description } = req.body;

    const result = await prisma.recipeTest.create({ data: { name, description } });
    res.json(result);
  }
}
