import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import IngredientTabs from "../components/ingredient-tabs.js";
import IngredientList from "../components/ingredient-list.js";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { prisma } from "../lib/prisma";

const PER_PAGE = 24;

function Home ( { dbIngredientCategory }, props )
{
  const [ ingreFilter, setIngreFilter ] = useState( {} );

  useEffect( () => { }, [] );

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
          initial={ { opacity: 0 } }
          animate={ {
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          } }
          exit={ { opacity: 0 } }
        >
          <Navbar />

          {/* Ingredient Tabs */ }
          <div className="flex-1 h-full justify-around dark:bg-neutral">
            <IngredientTabs
              dbIngredientCategory={ dbIngredientCategory }
              filter={ ingreFilter }
              perPage={ PER_PAGE }
            />
          </div>

          {/* Ingredient List */}
          <div className="flex justify-end px-5 pb-5 dark:bg-neutral">
            {/* The button to open modal */ }
            <label htmlFor="my-modal-4" className="btn btn-circle btn-primary btn-lg modal-button">
              <svg className="bi bi-basket color: white w-8 h-8 animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" fill="white" />
              </svg>
            </label>
            {/* Put this part before </body> tag */ }
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal modal-bottom sm:modal-middle cursor-pointer">
              <label className="modal-box relative dark:bg-neutral dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] dark:shadow-accent" htmlFor="">
                <IngredientList text="Find Recipes" />
              </label>
            </label>
          </div>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Home;

export const getServerSideProps = async () =>
{
  const dbIngredientCategory = await prisma.ingredientCategory.findMany( {
    select: {
      name: true,
      id: true,
    }
  } );

  return {
    props: {
      dbIngredientCategory: JSON.parse(
        JSON.stringify( dbIngredientCategory )
      ).sort( ( _, b ) => ( b[ "name" ] == "Others" ? -1 : 0 ) ),
    },
  };
};
