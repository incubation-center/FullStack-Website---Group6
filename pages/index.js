import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import IngredientTabs from "../components/ingredient-tabs.js";
import IngredientList from "../components/ingredient-list.js";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { prisma } from "../lib/prisma";

const PER_PAGE = 24;

function Home({ dbIngredientCategory }) {
  const [ingreFilter, setIngreFilter] = useState({});

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Ingredient Checklists" />
        <link rel="icon" href="/favicon.ico?" />
      </Head>

      <AnimatePresence mode="wait">
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
            <div className="m-5 sm:m-10 md:ml-0 lg:m-10 md:order-last">
              <IngredientList text="Find Recipes" />
            </div>

            {/* Ingredients */}
            <IngredientTabs
              dbIngredientCategory={dbIngredientCategory}
              filter={ingreFilter}
              perPage={PER_PAGE}
            />
          </div>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Home;

export const getServerSideProps = async () => {
  const dbIngredientCategory = await prisma.ingredientCategory.findMany({
    select: {
      name: true, 
      id: true,
    }
  });

  return {
    props: {
      dbIngredientCategory: JSON.parse(
        JSON.stringify(dbIngredientCategory)
      ).sort((_, b) => (b["name"] == "Others" ? -1 : 0)),
    },
  };
};
