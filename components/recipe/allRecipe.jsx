import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component"

import { url } from "../../lib/config";
import RecipeCard from "../recipe-card";


const AllRecipes = ({currentPage = 1}) => {
  /* TODO: have default empty recipes for now, we can also
    have default recipes by getStaticProps and pass the result
    from the page 
  */
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(currentPage);
  
  console.log(currentPage)

  useEffect(() => {
    const fetchRecipe = async (page) => {

      console.log(">>>>>>>>>... all recipes")
      const res = await fetch('/api/recipe', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: page,
          relation: {
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
          }
        })
      }).then(res => res.json());

      setRecipes(res.data);
    }

    fetchRecipe(page);
    // refreshData();
  }, [page])
  
  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);

  return (

    <div className="flex justify-around md:grid grid-cols-2 my-5 lg:flex flex-wrap">
      {/* <InfiniteScroll
        dataLength={recipes.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        hello
      </InfiniteScroll> */}
      {recipes.map((recipe) => (
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
      ))}
    </div>
  );
};


export default AllRecipes;
