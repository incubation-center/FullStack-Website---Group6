import { DEFAULT_PAGE_LIMIT } from '../../../lib/constant';
import { getPaginationResult } from '../../../lib/helpers';
import { prisma } from '../../../lib/prisma';


/* TODO: 
  add the getFilter to helper, when other API also use this
*/
const getFilter = (filter) => {
  const filterResult = {};
  Object.keys(filter).map(m2mKey => {
    filterResult[m2mKey] = {
      some: {
        id: {
          in: [...filter[m2mKey]]
        }
      }
    }
  });
  return filterResult;
}


export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { filter, relation, page = 1, limit = DEFAULT_PAGE_LIMIT } = req.body;

    const conditionalFilter = getFilter(filter);
    const recipeCount = await prisma.recipe.count({
        where: { ...conditionalFilter },
    });
    const recipes = await prisma.recipe.findMany({
        where: { ...conditionalFilter },
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
