import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
  if (req.method === 'POST') {
    const body = req.body;

    /* const result = await prisma.recipe.create({ 
      data: { 
        name, description,
        categories: {
          create: categories
        }
      } 
    }); */

    const result = await prisma.recipe.create({ 
      data: { 
        name: body["name"],
        cleanName: body["cleanName"],
        durationSecond: body["durationSecond"],
        durationString: body["durationString"],
        ingredientCount: body["ingredientCount"],
        ingredientLine: body["ingredientLine"],
        ingredientLineCount: body["ingredientLineCount"],
        numberOfServings: body["numberOfServings"],
        instruction: body["instruction"],
        imageLink: body["imageLink"],
        calories: body["calories"],
        protein: body["protein"],
        carb: body["carb"],
        fiber: body["fiber"],
        fat: body["fat"],
        sugar: body["sugar"],
        cholesterol: body["cholesterol"],
        weightGram: body["weightGram"],
        ingredients: body["ingredients"],
        categories: body["categories"],
        cuisines: body["cuisines"],
      } 
    });
    // res.json(result);
    res.json(result);
  }
}
