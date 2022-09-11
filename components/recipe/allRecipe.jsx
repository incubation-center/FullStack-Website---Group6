import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component"

import RecipeCard from "../recipe-card";


/* TODO
  X Infinite scrolll
  - accept filter 
  - 

*/
const AllRecipes = ({currentPage = 1}) => {
  /* TODO: have default empty recipes for now, we can also
    have default recipes by getStaticProps and pass the result
    from the page 
  */
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(currentPage);
  const [hasMore, setHasMore] = useState(true);
  
  const fetchRecipe = async (fromPage=page) => {
    const res = await fetch('/api/recipe', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page: fromPage,
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

    setPage(page + 1); // go to next page
    // stop the infinite scroll on last page
    if (page === res.pagination["totalPage"]) {
      setHasMore(false);
    }
    setRecipes([...recipes, ...res.data]); // increment new recipes to the existing recipes list
  }

  useEffect(() => {
    fetchRecipe(page);
  }, [])
  
  /* const router = useRouter();
  const refreshData = () => router.replace(router.asPath); */

  return (
    <InfiniteScroll
      className="flex justify-around md:grid grid-cols-2 my-5 lg:flex flex-wrap"
      dataLength={recipes.length}
      next={fetchRecipe}
      hasMore={hasMore}
      endMessage={
        <div className="container card items-center text-center">
          <h3 className="card-title text-xl dark:text-accent">
            No more recipe to show
          </h3>
        </div>
      }
    >
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
    </InfiniteScroll>
  );
};


export default AllRecipes;
