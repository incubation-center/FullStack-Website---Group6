import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import RecipeCard from "../components/recipe-card";
import IngredientList from "../components/ingredient-list.js";
import { motion } from "framer-motion";
import { inject, observer } from "mobx-react";
import { useCallback, useEffect } from "react";
import { prisma } from "../lib/prisma";

function RecipesResult ( {
  ingredientStore,
  recipeResultStore,
  allRecipes,
  allRecipeCategories,
} )
{
  const { setRecipeResult, recipeResultCount } = recipeResultStore;
  const { selectedIngredients } = ingredientStore;

  useEffect( () =>
  {
    console.log( allRecipes );
  }, [] );

  const MatchRecipes = useCallback( () =>
  {
    // const result = allRecipes.filter((recipe) => {
    //   recipe.ingredients.forEach((element) => {
    //     return element.name.toLowerCase() !== "Basil".toLowerCase();
    //   });
    // });

    let result = [];
    allRecipes.map( ( recipe ) =>
    {
      recipe.ingredients.forEach( ( element ) =>
      {
        if (
          selectedIngredients.some(
            ( ingredient ) => ingredient.name === element.name
          )
        )
          result.push( recipe );
      } );
    } );

    // let unique = [];
    // // Remove Duplicate Recipe
    // result = result.filter(res => {
    //   if(!unique.includes(res.name)) {
    //     unique.push(res)
    //   }
    // })

    // Sort by A to Z
    result.sort( ( a, b ) => ( a.name > b.name ? 1 : -1 ) );

    setRecipeResult( result );
    console.log( result );

    return (
      <div className="flex flex-wrap justify-around -mx-5 sm:m-0 md:-mx-5 lg:mx-0">
        { result.map( ( recipe, index ) =>
        {
          return (
            <motion.div
              key={ index }
              className="flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={ { once: true } }
              transition={ { duration: 0.5 } }
              variants={ {
                hidden: { opacity: 0, scale: 1 },
                visible: { opacity: 1, scale: 1 },
              } }
            >
              <RecipeCard recipe={ recipe } />
            </motion.div>
          );
        } ) }
      </div>
    );
  }, [ allRecipes, setRecipeResult, selectedIngredients ] );

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
                <svg
                  className="color: rgb(255, 194, 58); h-16 w-16"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.0656 10.3347C27.495 10.5444 25.8365 10.8494 24 11.2401C22.1635 10.8494 20.505 10.5444 18.9344 10.3347C20.3889 10.8707 21.8637 11.5367 23.4281 12.2735C23.7775 12.438 24 12.7901 24 13.1763C24 12.7901 24.2225 12.438 24.5719 12.2735C26.1363 11.5367 27.6111 10.8707 29.0656 10.3347ZM24 36.4187C24 37.1531 23.234 37.6364 22.5649 37.3336C17.7454 35.1522 13.6821 33.9759 8.23384 34.9703C7.6002 35.0859 7 34.6112 7 33.9671V10.7733C6.27982 10.9178 5.53424 11.0833 4.75659 11.2707C4.31119 11.378 4 11.7783 4 12.2365V37.7749C4 38.4077 4.58268 38.8804 5.20425 38.7618C11.4168 37.5766 15.6049 37.4936 21.3258 38.3611C21.8219 39.3339 22.8331 40 24 40C25.1669 40 26.1781 39.3339 26.6742 38.3611C32.3951 37.4936 36.5832 37.5766 42.7957 38.7618C43.4173 38.8804 44 38.4077 44 37.7749V12.2365C44 11.7783 43.6888 11.378 43.2434 11.2707C42.4658 11.0833 41.7202 10.9178 41 10.7733V33.9671C41 34.6112 40.3998 35.0859 39.7662 34.9703C34.3179 33.9759 30.2546 35.1522 25.4351 37.3336C24.766 37.6364 24 37.1531 24 36.4187Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 10.5375V33.967C8 33.9674 8 33.9678 8.00001 33.9681C8.00095 33.9694 8.003 33.9719 8.00678 33.9749C8.01286 33.9798 8.02054 33.9838 8.02856 33.9859C8.03554 33.9877 8.04358 33.9884 8.05429 33.9865C13.7857 32.9404 18.0681 34.2006 22.9773 36.4225C22.9823 36.4248 22.9847 36.4252 22.985 36.4252L22.9861 36.4252C22.9877 36.4251 22.9921 36.4242 22.9972 36.4209C22.9983 36.4202 22.9993 36.4195 23 36.4189C23 36.4189 23 36.419 23 36.4189V13.1772C17.6831 10.6732 13.6584 9.12233 8 10.5375ZM7.48401 8.60493C13.8784 6.99621 18.4649 8.83062 23.8542 11.3687C24.5553 11.6989 25 12.4043 25 13.1762V36.4187C25 37.8969 23.4678 38.8398 22.1526 38.2445C17.4227 36.1038 13.5785 35.0113 8.41339 35.954C7.20041 36.1754 6 35.2701 6 33.967V10.524C6 9.63895 6.589 8.83011 7.48401 8.60493Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40 10.5375V33.967C40 33.9674 40 33.9678 40 33.9681C39.999 33.9694 39.997 33.9719 39.9932 33.9749C39.9871 33.9798 39.9795 33.9838 39.9714 33.9859C39.9645 33.9877 39.9564 33.9884 39.9457 33.9865C34.2143 32.9404 29.9319 34.2006 25.0227 36.4225C25.0177 36.4248 25.0153 36.4252 25.015 36.4252L25.0139 36.4252C25.0123 36.4251 25.0079 36.4242 25.0028 36.4209C25.0017 36.4202 25.0007 36.4193 25 36.4187C25 36.4186 25 36.4188 25 36.4187V13.1762C30.3169 10.6723 34.3416 9.12233 40 10.5375ZM40.516 8.60493C34.1216 6.99621 29.5351 8.83062 24.1458 11.3687C23.4447 11.6989 23 12.4052 23 13.1772V36.4189C23 37.8971 24.5322 38.8398 25.8474 38.2445C30.5773 36.1038 34.4215 35.0113 39.5866 35.954C40.7996 36.1754 42 35.2701 42 33.967V10.524C42 9.63895 41.411 8.83011 40.516 8.60493Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0104 29.0025C14.6795 28.9646 16.7269 29.3354 20.622 30.9258L21.378 29.0742C17.2509 27.389 14.9401 26.9618 10.9896 27.0027L11.0104 29.0025Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0104 25.0025C14.6795 24.9646 16.7269 25.3354 20.622 26.9258L21.378 25.0742C17.2509 23.389 14.9401 22.9618 10.9896 23.0027L11.0104 25.0025Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0104 21.0025C14.6795 20.9646 16.7269 21.3354 20.622 22.9258L21.378 21.0742C17.2509 19.389 14.9401 18.9618 10.9896 19.0027L11.0104 21.0025Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5 13V16H11.5V13H13.5Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 14V17H15V14H17Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5 15V18H18.5V15H20.5Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.9896 29.0025C33.3205 28.9646 31.2731 29.3354 27.378 30.9258L26.622 29.0742C30.7491 27.389 33.0599 26.9618 37.0103 27.0027L36.9896 29.0025Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.9896 25.0025C33.3205 24.9646 31.2731 25.3354 27.378 26.9258L26.622 25.0742C30.7491 23.389 33.0599 22.9618 37.0103 23.0027L36.9896 25.0025Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.9896 21.0025C33.3205 20.9646 31.2731 21.3354 27.378 22.9258L26.622 21.0742C30.7491 19.389 33.0599 18.9618 37.0103 19.0027L36.9896 21.0025Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.5 13V16H36.5V13H34.5Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31 14V17H33V14H31Z"
                    fill="#ffc23a"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.5 15V18H29.5V15H27.5Z"
                    fill="#ffc23a"
                  />
                </svg>
              </motion.div>
              <h1 className="text-2xl lg:text-3xl dark:text-accent font-bold my-5">
                Result:
              </h1>
              <h2 className="text-xl lg:text-2xl dark:text-accent font-bold my-6 ml-3">
                { recipeResultCount } recipes
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

            <MatchRecipes />
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

export async function getStaticProps ()
{
  const allRecipes = await prisma.recipe.findMany( {
    include: {
      ingredients: {
        select: {
          name: true,
        },
      },
      categories: {
        select: {
          name: true,
        },
      },
      cuisines: {
        select: {
          name: true,
        },
      },
    },
  } );
  const allRecipeCategories = await prisma.recipeCategory.findMany();

  return {
    props: {
      allRecipes: JSON.parse( JSON.stringify( allRecipes ) ),
      allRecipeCategories: JSON.parse( JSON.stringify( allRecipeCategories ) ),
    },
  };
}