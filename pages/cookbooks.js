import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import RecipeCard from "../components/recipe-card";
import AllRecipes from "../components/recipe/allRecipe";
import SliderFilter from "../components/slider-filter";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { prisma } from "../lib/prisma";
import { fetchRecipe } from "../lib/helpers";


function Cookbooks({ allRecipes, allRecipeCategories, allCuisines }) {
  const [keyword, setKeyword] = useState("");

  const [recipeFilter, setRecipeFilter] = useState({});

  const filteredAllRecipes = sort(allRecipes)
  const [allRecipesForFilter, setAllRecipesForFilter] = useState(filteredAllRecipes);
  const [allRecipesAfterFilter, setAllRecipesAfterFilter] = useState(filteredAllRecipes);
  /* const [allRecipesForFilter, setAllRecipesForFilter] = useState(allRecipes);
  const [allRecipesAfterFilter, setAllRecipesAfterFilter] =
    useState(allRecipes); */
  const [categorySelected, setCategorySelected] = useState(undefined);

  const maxCalories = 1702
  const maxDuration = 9900/60
  const [calories, setCalories] = useState(maxCalories)
  const [duration, setDuration] = useState(maxDuration)

  function sort(items) {
    return items.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  function handleChangeCalories(event,value) {
    setAllRecipesForFilter(allRecipesAfterFilter.filter(recipe => recipe.calories <= value))
  }
  
  function handleChangeDuration(event, value) {
    setAllRecipesForFilter(allRecipesAfterFilter.filter(recipe => recipe.durationSecond/60 <= value))
  }

  function handleCaloriesBarValue(e) {
    setCalories(e.target.value)
  }

  function handleDurationBarValue(e) {
    setDuration(e.target.value)
  }

  useEffect(() => {
    if (keyword !== "") {
      const filtered = filteredAllRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setAllRecipesForFilter(filtered);
    } else {
      setAllRecipesForFilter(filteredAllRecipes);
    }
  }, [ allRecipes, filteredAllRecipes, keyword ] );
  
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Recipes" />
        <link rel="icon" href="/cookbooks.ico?" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex flex-col flex-1 dark:bg-neutral">
          {/* Range Slider Filter */}
          <div className="flex flex-col md:flex-row justify-end md:space-x-5 space-y-5 md:space-y-0 m-7">
            <div className="flex flex-row space-x-5 basis-1/2 xl:basis-1/3">
              <h2 className="text-lg lg:text-xl font-bold dark:text-accent mt-3.5 sm:m-0">Calories</h2>
              <SliderFilter item={calories} maxValue={maxCalories} handleChangeCommitted={handleChangeCalories} handleChange={handleCaloriesBarValue} />
            </div>
            <div className="flex flex-row space-x-5 basis-1/2 xl:basis-1/3">
              <h2 className="text-lg lg:text-xl font-bold dark:text-accent mt-3.5 sm:m-0">Duration</h2>
              <SliderFilter item={duration} maxValue={maxDuration} handleChangeCommitted={handleChangeDuration} handleChange={handleDurationBarValue}/>
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
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
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
            <select
              className="select shrink dark:text-accent dark:bg-neutral w-full max-w-xs shadow-md dark:shadow-accent/25 mx-5"
              defaultValue={"none"}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                // reset filter when filter by cuisine
                if (value === 0) setRecipeFilter({});
                else setRecipeFilter({ cuisines: [value] });

                setCategorySelected("none");
                setCalories(maxCalories)
                setDuration(maxDuration)
              }}
            >
              <option disabled value={"none"}>
                Filter by cuisines
              </option>
              <option className="text-base" value={0}>All</option>
              {allCuisines.map(cuisine => (
                <option className="text-base" value={cuisine.id} key={cuisine.id}>{cuisine.name}</option>
              ))}
            </select>

            <select
              className="select shrink dark:text-accent dark:bg-neutral w-full max-w-xs shadow-md dark:shadow-accent/25 mx-5"
              defaultValue={"none"}
              value={categorySelected}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                const { ['categories']: _, ...withoutCategories } = recipeFilter; // get filter except for categories
                setCategorySelected(value);
                if (value === 0) setRecipeFilter(withoutCategories);
                else setRecipeFilter({...recipeFilter, categories: [value] });
              }}
            >
              <option value={"none"} disabled>
                Filter by recipe categories
              </option>
              <option className="text-base" value={0}>All</option>
              {allRecipeCategories.map(category => (
                <option className="text-base" value={category.id} key={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          <AllRecipes currentPage={1} filter={recipeFilter} />
        </main>

        <ScrollTop />
        <Footer />
      </div>
    </>
  );
}

// Cookbooks.getInitialProps = async (ctx) => {
export async function getServerSideProps() {
  const queryContaineRecipeSelect = {
    where: {
      recipes: {
        some: {
          id: { not: 0 }
        }
      }
    },
    select: {
      id: true,
      name: true
    }
  }
  const allCuisines = await prisma.cuisine.findMany(queryContaineRecipeSelect);
  const allRecipeCategories = await prisma.recipeCategory.findMany(queryContaineRecipeSelect);

  return {
    props: {
      allRecipeCategories: JSON.parse(JSON.stringify(allRecipeCategories)),
      allCuisines: JSON.parse(JSON.stringify(allCuisines)),
    },
  };
}

export default Cookbooks;