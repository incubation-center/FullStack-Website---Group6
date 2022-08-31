import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'DELETE') {

    const result = await prisma.cuisine.deleteMany({});
    res.json(result);
  }
}
