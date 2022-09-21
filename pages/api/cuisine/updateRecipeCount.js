import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'POST') {
    const body = req.body;

    const result = await prisma.cuisine.update({ 
      where: {
        id: body["id"]
      },
      data: { 
        recipeCount: body["recipeCount"],
      } 
    });
    res.json(result);
  }
}
