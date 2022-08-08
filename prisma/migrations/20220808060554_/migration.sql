-- DropForeignKey
ALTER TABLE "RecipesCategoriesPivot" DROP CONSTRAINT "RecipesCategoriesPivot_recipeCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "RecipesCategoriesPivot" DROP CONSTRAINT "RecipesCategoriesPivot_recipeId_fkey";

-- AddForeignKey
ALTER TABLE "RecipesCategoriesPivot" ADD CONSTRAINT "RecipesCategoriesPivot_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipesCategoriesPivot" ADD CONSTRAINT "RecipesCategoriesPivot_recipeCategoryId_fkey" FOREIGN KEY ("recipeCategoryId") REFERENCES "RecipeCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
