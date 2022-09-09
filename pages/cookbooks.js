import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import RecipeCard from "../components/recipe-card";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { prisma } from "../lib/prisma";

function Cookbooks({ allRecipes, allRecipeCategories }) {
  // useEffect(() => {
  //   console.log(allRecipes);
  // }, []);

  const [allRecipesForFilter, setAllRecipesForFilter] = useState(allRecipes)
  const [allRecipesAfterFilter, setAllRecipesAfterFilter] = useState(allRecipes)
  const [categorySelected, setCategorySelected] = useState(null)
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Recipes" />
        <link rel="icon" href="/favicon.ico?" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex flex-col flex-1 dark:bg-neutral">
          {/* Range Filter */}
          <div className="flex flex-col md:flex-row justify-end md:space-x-5 space-y-5 md:space-y-0 m-5">
            <div className="flex flex-row space-x-5 basis-1/2 xl:basis-1/3">
              <h2 className="text-xl font-bold dark:text-accent">Calories</h2>
              <input
                type="range"
                min="0"
                max="100"
                className="range range-primary range-sm my-1 cursor-grab dark:bg-accent/5"
              />
            </div>
            <div className="flex flex-row space-x-5 basis-1/2 xl:basis-1/3">
              <h2 className="text-xl dark:text-accent font-bold">Duration</h2>
              <input
                type="range"
                min="0"
                max="100"
                className="range range-primary range-sm my-1 cursor-grab dark:bg-accent/5"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-end items-center space-y-5 md:space-y-0 m-5">
            {/* Search Bar */}
            <div className="form-control flex-1 justify-start order-last md:order-first mt-5 md:mt-0">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered dark:bg-accent/10 dark:text-accent"
                />
                <button className="btn btn-square btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-base-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Select Filter */}
            <select className="select shrink dark:text-accent dark:bg-neutral w-full max-w-xs shadow-md dark:shadow-accent/25 mx-5"
              onChange={(e)=> {
                function filterByCuisines(data) {
                  if (data.cuisines[0]?.name == null && e.target.value == "World" ) {
                    return true;
                  } else if (e.target.value == "All") {
                    return true;
                  } else if (data.cuisines[0]?.name == e.target.value) {
                    return true;
                  } 
                  return false;
                }
                var value = allRecipes.filter(filterByCuisines)
                setAllRecipesForFilter(value)
                setAllRecipesAfterFilter(value)
                setCategorySelected("none")
              }}
            >
              <option disabled selected>
                Filter by cuisines
              </option>
              <option className="text-base">All</option>
              <option className="text-base">American</option>
              <option className="text-base">Greek</option>
              <option className="text-base">Italian</option>
              <option className="text-base">Japanese</option>
              <option className="text-base">Kid-Friendly</option>
              <option className="text-base">Mediterranean</option>
              <option className="text-base">Polish</option>
              <option className="text-base">Turkish</option>
              <option className="text-base">World</option>
            </select>

            <select className="select shrink dark:text-accent dark:bg-neutral w-full max-w-xs shadow-md dark:shadow-accent/25 mx-5"
              value={categorySelected}
              onChange={(e)=> {
                setCategorySelected(e.target.value)
                function filterByRecipeCategory(data) {
                  var flag = false;
                  data.categories.map((tag)=> {
                    if (tag.name == e.target.value) {
                      flag = true
                    }
                  })
                  if (e.target.value == "All") {
                    return true;
                  } else if(flag) {
                    return true;
                  }
                  return false;
                }
                setAllRecipesForFilter(allRecipesAfterFilter.filter(filterByRecipeCategory))
              }}
            >
              <option value={"none"} disabled selected>
                Filter by recipe categories
              </option>
              <option className="text-base">All</option>
              <option className="text-base">Breakfast</option>
              <option className="text-base">Lunch</option>
              <option className="text-base">Dinner</option>
              <option className="text-base">Snack</option>
            </select>
          </div>

          <div className="flex justify-around md:grid grid-cols-2 my-5 lg:flex flex-wrap">
            {allRecipesForFilter.map((recipe) => {
              return (
                <motion.div
                  key={recipe.id}
                  className="flex justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, scale: 1 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <RecipeCard recipe={recipe} />
                </motion.div>
              );
            })}
          </div>
        </main>

        <ScrollTop />

        <Footer />
      </div>
    </>
  );
}

export default Cookbooks;

export async function getStaticProps() {
  const allRecipes = await prisma.recipe.findMany({
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
  });
  const allRecipeCategories = await prisma.recipeCategory.findMany();

  return {
    props: {
      allRecipes: JSON.parse(JSON.stringify(allRecipes)),
      allRecipeCategories: JSON.parse(JSON.stringify(allRecipeCategories)),
    },
  };
}
