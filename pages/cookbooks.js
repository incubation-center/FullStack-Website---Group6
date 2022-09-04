import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import RecipeCard from "../components/recipe-card";
import { useEffect } from "react";
import { prisma } from "../lib/prisma";

function Cookbooks({ allRecipes, allRecipeCategories }) {
  let result = [
    { id: 1, title: "Kokos Curry", calories: 320, time: 45 },
    { id: 2, title: "Kokos Curry", calories: 320, time: 45 },
    { id: 3, title: "Kokos Curry", calories: 320, time: 45 },
    { id: 4, title: "Kokos Curry", calories: 320, time: 45 },
    { id: 5, title: "Kokos Curry", calories: 320, time: 45 },
    { id: 6, title: "Kokos Curry", calories: 320, time: 45 },
    { id: 7, title: "Kokos Curry", calories: 320, time: 45 },
    { id: 8, title: "Kokos Curry", calories: 320, time: 45 },
    { id: 9, title: "Kokos Curry", calories: 320, time: 45 },
  ];

  useEffect(() => {
    console.log(allRecipes);
  }, []);

  return (
    <>
      <Head>
        <title>Cookbook</title>
        <meta name="description" content="Bookmarked Recipes" />
        <link rel="icon" href="/favicon.ico" />
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
            <select className="select shrink dark:text-accent dark:bg-neutral w-full max-w-xs shadow-md dark:shadow-accent/25 mx-5">
              <option disabled selected>
                Filter by cuisines
              </option>
              <option className="text-base">American</option>
              <option className="text-base">Chinese</option>
              <option className="text-base">Greek</option>
              <option className="text-base">Italian</option>
              <option className="text-base">Japanese</option>
              <option className="text-base">Kid-Friendly</option>
              <option className="text-base">Mediterranean</option>
              <option className="text-base">Mexican</option>
              <option className="text-base">Polish</option>
              <option className="text-base">Spanish</option>
              <option className="text-base">Turkish</option>
              <option className="text-base">World</option>
            </select>
            <select className="select shrink dark:text-accent dark:bg-neutral w-full max-w-xs shadow-md dark:shadow-accent/25 mx-5">
              <option disabled selected>
                Filter by recipe categories
              </option>
              <option className="text-base">Breakfast</option>
              <option className="text-base">Lunch</option>
              <option className="text-base">Dinner</option>
              <option className="text-base">Snack</option>
            </select>
          </div>

          <div className="flex justify-around md:grid grid-cols-2 my-5 lg:flex flex-wrap">
            {allRecipes.map((recipe) => {
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
