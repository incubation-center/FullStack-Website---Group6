import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import { prisma } from "../lib/prisma";


function GetCountAttributes({cuisineCount, ingredCount}) {
  
  const getAggregate = async (event) => {
    /* const cuisineRecipeCount = await fetch("api/aggregate/cuisine/countRecipe", {
      method: "GET",
    }).then(data => data.json());
    for (let i in cuisineRecipeCount.data) {
      let cuisineData = cuisineRecipeCount.data[i];
      let data = {
        id: cuisineData.id,
        recipeCount: cuisineData._count.recipes
      }

      const res = await fetch("api/cuisine/updateRecipeCount", {
        body: JSON.stringify(data),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      console.log(data);
      console.log(res);
    } */
  
    /* const ingredientRecipeCount = await fetch("api/aggregate/ingredient/countRecipe", {
      method: "GET",
    }).then(data => data.json());
    for (let i in ingredientRecipeCount.data) {
      let ingredientData = ingredientRecipeCount.data[i];
      let data = {
        id: ingredientData.id,
        recipeCount: ingredientData._count.recipes
      }
      
      const res = await fetch("api/ingredient/updateRecipeCount", {
        body: JSON.stringify(data),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      console.log(data);
      console.log(res);
    } */

  }


  return (
    <div
      className="flex flex-col justify-between"
      style={ { minHeight: "100vh" } }
    >
      <Navbar />

      {/* Max properties of recipes */}
      <div className="flex-1 p-5 h-full justify-center md:flex dark:bg-neutral">
        <div className="m-0 sm:m-px md:my-5 md:ml-5 lg:m-5 md:order-last">
          <h2 className="text-xl lg:text-2xl dark:text-accent font-bold m-3">
            Aggregated
          </h2>
          <button
            onClick={ getAggregate }
            className="inline-block px-5 py-3 text-sm font-medium text-accent bg-primary rounded-lg"
            // disabled={ true }
          >
                maxRecipeProperty
          </button>

        </div>
        
      </div>

      {/* Count all recipes of each cuisine */}
      <div className="overflow-x-auto">
        <h2 className="card-title">Count Recipe of All Cuisines</h2>
        <table className="table w-full">
            <tbody>
              <tr>
                {
                  cuisineCount.map((c1, i) => <td key={i}> {c1.name} </td>)
                }
              </tr>
                  
              <tr>
                {
                  cuisineCount.map((c2, i) => <td key={i}> {c2.recipeCount} </td>)
                }
              </tr>

              <tr>
                {
                  ingredCount.map((c1, i) => <td key={i}> {c1.name} </td>)
                }
              </tr>
                  
              <tr>
                {
                  ingredCount.map((c2, i) => <td key={i}> {c2.recipeCount} </td>)
                }
              </tr>
            </tbody>
        </table>
      </div>

      <ScrollTop />

      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {  

  const cuisineCount = await prisma.cuisine.findMany({
    select: {
      name: true,
      recipeCount: true
    }
  });
  const ingredCount = await prisma.ingredient.findMany({
    select: {
      name: true,
      recipeCount: true
    },
    orderBy: {
      recipeCount: 'desc'
    }
  });

  return {
    props: {
      cuisineCount: cuisineCount,
      ingredCount: ingredCount
    }
  }
}


export default GetCountAttributes;
