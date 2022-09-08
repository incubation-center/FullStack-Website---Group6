import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'POST') {
    const body = req.body;

    // categories, recipes
    const result = await prisma.ingredient.create({ 
      data: { 
        name: body["name"],
      } 
    });
    res.json(result);
  }
}
