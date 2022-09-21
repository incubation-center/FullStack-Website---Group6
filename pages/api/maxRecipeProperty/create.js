import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'POST') {
    const body = req.body;

    // categories, recipes
    const result = await prisma.maxRecipeProperty.create({ 
      data: { 
        durationSecond: body["durationSecond"],
        calories: body["calories"],
        protein: body["protein"],
        carb: body["carb"],
        fiber: body["fiber"],
        fat: body["fat"],
        sugar: body["sugar"],
        cholesterol: body["cholesterol"]
      } 
    });
    res.json(result);
  }
}
