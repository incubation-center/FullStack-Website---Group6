import { prisma } from '../../../lib/prisma';


export default async function handle(req, res) {
    if (req.method === 'GET') {
        const params = req.query;

        const ingredient = await prisma.ingredient.findFirst({
            where: params,
        });
        res.json(ingredient);
    }
}