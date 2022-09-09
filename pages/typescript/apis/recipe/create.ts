import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../lib/prisma';


export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, description, categories } = req.body;

    const result = await prisma.recipe.create({ 
      data: { 
        name, description,
        categories: {
          create: categories
        }
      } 
    });
    res.json(result);
  }
}
