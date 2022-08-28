/*
  Warnings:

  - You are about to drop the column `calories` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `duration_second` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the `PivotRecipesIngredients` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `durationString` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredientLine` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nutrientsPerServing` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PivotRecipesIngredients" DROP CONSTRAINT "PivotRecipesIngredients_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "PivotRecipesIngredients" DROP CONSTRAINT "PivotRecipesIngredients_recipeId_fkey";

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "calories",
DROP COLUMN "duration_second",
ADD COLUMN     "cleanName" TEXT,
ADD COLUMN     "cuisine" TEXT,
ADD COLUMN     "durationSecond" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "durationString" TEXT NOT NULL,
ADD COLUMN     "ingredientCount" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "ingredientLine" TEXT NOT NULL,
ADD COLUMN     "ingredientLineCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "mealTags" TEXT[],
ADD COLUMN     "numberOfServings" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "nutrientsPerServing" JSONB NOT NULL,
ADD COLUMN     "weightGram" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "PivotRecipesIngredients";

-- CreateTable
CREATE TABLE "_IngredientToRecipe" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientToRecipe_AB_unique" ON "_IngredientToRecipe"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientToRecipe_B_index" ON "_IngredientToRecipe"("B");

-- AddForeignKey
ALTER TABLE "_IngredientToRecipe" ADD CONSTRAINT "_IngredientToRecipe_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToRecipe" ADD CONSTRAINT "_IngredientToRecipe_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
