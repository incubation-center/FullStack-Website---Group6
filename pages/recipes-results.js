import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import IngredientList from "../components/ingredient-list.js";
import { motion } from "framer-motion";
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";

import AllRecipes from "../components/recipe/allRecipe";
import { makeRelatedFilterMany } from "../lib/helpers";
import CookbookIcon from "../components/icons/cookbooks-icon";


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
  }, [totalRecipeResult] );

  return (
    <>
      <Head>
        <title>Recipe Results</title>
        <meta name="description" content="Recipe Results" />
        <link rel="icon" href="/recipe_results.ico?" />
      </Head>

      <div
        className="flex flex-col justify-between"
        style={ { minHeight: "100vh" } }
      >
        <Navbar />

        <div className="flex-1 p-5 h-full justify-between md:flex dark:bg-neutral">
          <div className="m-0 sm:m-px md:my-5 md:ml-5 lg:m-5 md:order-last">
            <IngredientList text="Select Ingredients" />
          </div>

          <div className="flex flex-col mt-5 sm:m-0">
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
              {/* <div className="flex justify-center">
                <Image
                  src="/no_recipe.png"
                  alt="No Recipes Found"
                  width={ 500 }
                  height={ 500 }
                />
              </div> */}
            </div>

            <AllRecipes filter={ recipeFilter } currentPage={ 1 } />
          </div>
        </div>

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
