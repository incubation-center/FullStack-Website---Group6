import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
    if (req.method === 'POST') res.json(
        await prisma.recipeCategory.findMany(
            req.body
        )
    );
}