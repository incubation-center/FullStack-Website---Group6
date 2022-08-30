import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'POST') {
    const body = req.body;

    const result = await prisma.cuisine.create(
      { data: { 
        name: body["name"], 
        description: body["description"],
      } }
    );
    res.json(result);
  }
}
