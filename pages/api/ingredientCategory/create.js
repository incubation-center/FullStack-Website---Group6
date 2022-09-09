import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'POST') {
    const body = req.body;

    const result = await prisma.ingredientCategory.create(
      { data: { 
        name: body["name"], 
        description: body["description"],
        ingredients: body["ingredients"]
      } }
    );
    res.json(result);
  }
}
