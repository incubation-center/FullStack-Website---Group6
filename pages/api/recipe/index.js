import { DEFAULT_PAGE_LIMIT } from '../../../lib/constant';
import { getPaginationResult } from '../../../lib/helpers';
import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { filter, relation, page = 1, limit = DEFAULT_PAGE_LIMIT } = req.body;

    const recipeCount = await prisma.recipe.count({
        where: { ...filter },
    });
    const recipes = await prisma.recipe.findMany({
        where: { ...filter },
        include: relation,
        skip: limit * (page - 1),
        take: limit,
    });

    res.status(200).json({
      data: recipes,
      pagination: getPaginationResult(
        recipeCount,
        limit,
        recipes.length,
        page
      )
    });
  }
}
