import { prisma } from '../../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const recipe = await prisma.recipe.findFirst({
        where: {
            id: parseInt(id)
        }
    });

    res.status(200).json({
      data: recipe
    });
  }
}
