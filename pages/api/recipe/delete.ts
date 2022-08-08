import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../lib/prisma';


export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {

    const result = await prisma.recipe.deleteMany({});
    res.json(result);
  }
}
