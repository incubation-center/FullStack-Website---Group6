import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CookbookIcon from "../components/icons/cookbooks-icon";
import IngredientList from "../components/ingredient-list.js";
import AllRecipes from "../components/recipe/allRecipe";
import ScrollTop from "../components/scroll-top";
import { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { motion } from "framer-motion";
import { makeRelatedFilterMany } from "../lib/helpers";

function RecipesResult ( {
  ingredientStore,
  recipeResultStore,
} )
{
  const { totalRecipeResult } = recipeResultStore;
  const { selectedIngredientIds } = ingredientStore;
  
  const [ recipeFilter, setRecipeFilter ] = useState( {} );

  useEffect( () =>
  {
    /* NOTE:
      - for now query "some", should ask other if we should use "every"
    */
    setRecipeFilter( makeRelatedFilterMany( 'ingredients', selectedIngredientIds ) );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalRecipeResult, selectedIngredientIds] );

  return (
    <>
      <Head>
        <title>Recipe Results</title>
        <meta name="description" content="Recipe Results" />
        <link rel="icon" href="/recipe_results.ico?" />
      </Head>

      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />

        <main className="flex-1 flex-col dark:bg-neutral">
          <div className="flex justify-between px-5 pt-5">
            <div className="flex flex-row">
              <motion.div
                initial={ { scale: 0 } }
                animate={ { scale: 1 } }
                transition={ { type: "spring", stiffness: 260, damping: 30 } }
                whileHover={ { scaleX: 1.2 } }
                whileTap={ { rotateY: 90 } }
              >
                <CookbookIcon />
              </motion.div>
              <h1 className="text-2xl lg:text-3xl dark:text-accent font-bold my-5">
                Result:
              </h1>
              <h2 className="text-xl lg:text-2xl dark:text-accent font-bold my-6 ml-3">
                { totalRecipeResult } recipes
              </h2>
            </div>

            {/* Ingredient List */}
            <div className="flex justify-end px-5 pt-5 dark:bg-neutral">
              <IngredientList text="Select Ingredients" />
            </div>
          </div>

          <AllRecipes filter={ recipeFilter } currentPage={ 1 } />
        </main>

        <ScrollTop />
        <Footer />
      </div>
    </>
  );
}

export default inject(
  "ingredientStore",
  "recipeResultStore"
)( observer( RecipesResult ) );