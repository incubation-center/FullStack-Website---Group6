import { prisma } from '../../../lib/prisma';


// TODO: add options to delete 1, multiple or all

export default async function handle(req, res) {
  if (req.method === 'DELETE') {

    const result = await prisma.recipe.deleteMany({});
    res.json(result);
  }
}
