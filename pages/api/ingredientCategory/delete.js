import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'DELETE') {

    const result = await prisma.ingredientCategory.deleteMany({});
    res.json(result);
  }
}
