import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { name, description } = req.body;

    const result = await prisma.ingredientCategory.create({ 
      data: { 
        name, description,
      } 
    });
    res.json(result);
  }
}
