-- AlterTable
ALTER TABLE "Cuisine" ADD COLUMN     "recipeCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "recipeCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "IngredientCategory" ADD COLUMN     "icon" TEXT;

-- CreateTable
CREATE TABLE "MaxRecipeProperty" (
    "id" SERIAL NOT NULL,
    "durationSecond" INTEGER NOT NULL DEFAULT 0,
    "calories" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "protein" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "carb" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "fiber" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "fat" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "sugar" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cholesterol" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "MaxRecipeProperty_pkey" PRIMARY KEY ("id")
);
