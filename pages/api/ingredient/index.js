import { DEFAULT_PAGE_LIMIT } from '../../../lib/constant';
import { getPaginationResult } from '../../../lib/helpers';
import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { filter, sort, relation, page = 1, limit = DEFAULT_PAGE_LIMIT } = req.body;

    const ingredientCount = await prisma.ingredient.count({
        where: filter,
    });
    const ingredients = await prisma.ingredient.findMany({
        where: filter,
        orderBy: sort,
        include: relation,
        skip: limit * (page - 1),
        take: limit,
    });

    res.status(200).json({
      data: ingredients,
      pagination: getPaginationResult(
        ingredientCount,
        limit,
        ingredients.length,
        page
      )
    });
  }
}
