import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import IngredientTabs from "../components/ingredient-tabs.js";
import IngredientList from "../components/ingredient-list.js";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { prisma } from "../lib/prisma";
import * as csv from "fast-csv";
import path from "path";
import { useState } from "react";

function Home({ allIngredients, dbIngredientCategory }) {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Ingredient Checklists" />
        <link rel="icon" href="/favicon.ico?" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="flex flex-col justify-around min-h-screen"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          exit={{ opacity: 0 }}
        >
          <Navbar />

          <div className="flex-1 md:flex h-full justify-around dark:bg-neutral">
            <div className="m-5 sm:m-10 md:order-last">
              <IngredientList text="Find Recipes" />
            </div>

            <div className="m-5 sm:m-10 md:grow">
              {/* Search Bar */}
              <div className="form-control mb-4">
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

              {/* Ingredients */}
              <IngredientTabs
                keyword={keyword}
                dbIngredientCategory={dbIngredientCategory}
                allIngredients={allIngredients}
              />
            </div>
          </div>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Home;

export const getServerSideProps = async () => {
  const DIR_PATH = "lib/data/category";

  // read csv
  const file_ingre_cate = "ingredient_categories.csv";

  // use fast-csv to read and wrap in a promise to await
  const ingre_cates = await new Promise((resolve, reject) => {
    const rows = [];

    csv
      .parseFile(path.resolve(DIR_PATH, file_ingre_cate), { headers: true })
      .on("error", reject)
      .on("data", (row) => {
        // const obj = rowProcessor(row);
        if (row) rows.push(row);
      })
      .on("end", () => {
        resolve(rows);
      });
  });

  const dbIngredientCategory = await prisma.ingredientCategory.findMany({
    include: {
      ingredients: {
        select: {
          name: true,
        },
      },
    },
  });

  const allIngredients = await prisma.ingredient.findMany({
    include: {
      categories: {
        select: {
          name: true,
        },
      },
    },
  });

  return {
    props: {
      ingre_cates: ingre_cates,
      categories: Object.keys(ingre_cates[0]).filter(
        (c) => !!c && c !== "Categories"
      ),
      dbIngredientCategory: JSON.parse(
        JSON.stringify(dbIngredientCategory)
      ).sort((a, b) => (b["name"] == "Others" ? -1 : 0)),
      allIngredients: JSON.parse(JSON.stringify(allIngredients)),
    },
  };
};
