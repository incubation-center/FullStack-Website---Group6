import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'GET') {

    const max_properties = await prisma.recipe.aggregate({
        _max: {
            durationSecond: true,
            calories: true,
            protein: true,
            carb: true,
            fiber: true,
            fat: true,
            sugar: true,
            cholesterol: true
        }
    });

    res.status(200).json({
      data: max_properties
    });
  }
}
