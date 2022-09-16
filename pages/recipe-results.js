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

            {/* Ingredient List */ }
            <div className="flex justify-end px-5 pt-5 dark:bg-neutral">
              {/* The button to open modal */ }
              <label htmlFor="my-modal-4" className="btn btn-circle btn-primary btn-lg modal-button">
                <svg className="bi bi-basket color: white w-8 h-8 animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" fill="white" />
                </svg>
              </label>
              {/* Put this part before </body> tag */ }
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal modal-bottom sm:modal-middle cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <IngredientList text="Select Ingredients" />
                </label>
              </label>
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
