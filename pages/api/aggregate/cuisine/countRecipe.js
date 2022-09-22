import { prisma } from '../../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'GET') {

    const recipeCount = await prisma.cuisine.findMany({
        include: {
            _count: {
                select: {
                    recipes: true
                }
            }
        },
        orderBy: {
            recipes: {
                _count: 'desc'
            }
        }
    });

    res.status(200).json({
        total: recipeCount
            .map(recipe => recipe._count.recipes)
            .reduce((a, b) => a + b
        ),
        data: recipeCount
    });
  }
}
