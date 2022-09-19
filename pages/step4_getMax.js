import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import { url } from '../lib/config';


function getMax({
  getMax,
  cuisineRecipeCount,
  ingredientRecipeCount
}) {

  return (
    <div
      className="flex flex-col justify-between"
      style={ { minHeight: "100vh" } }
    >
      <Navbar />

      {/* Max properties of recipes */}
      <div className="overflow-x-auto">
        <h2 className="card-title">Max Recipe Properties</h2>
        <table className="table w-full">
            <tbody>
              <tr>
                {
                  Object.keys(getMax).map(key => (
                    <td key={1}>{ key }</td>
                  ))
                }

              </tr>
                  <tr>
                    {Object.keys(getMax).map((info, i) => {
                        return (
                          <td key={i}>{JSON.stringify(getMax[info])}</td>
                        )
                      }
                    )}
                  </tr>
            </tbody>
        </table>
      </div>

      {/* Count all recipes of each cuisine */}
      <div className="overflow-x-auto">
        <h2 className="card-title">Count Recipe of All Cuisines</h2>
        <table className="table w-full">
            <tbody>
              <tr>
                <td key={0}>total</td>
                {
                  cuisineRecipeCount.data.map(key => (
                    <td key={1}>{ key.name }</td>
                  ))
                }
              </tr>
                  <tr>
                    <td key={0}>
                      {JSON.stringify(cuisineRecipeCount.total)}
                    </td>
                    {cuisineRecipeCount.data.map((recipe, i) => {
                        return (
                          <td key={i}>
                            {JSON.stringify(recipe._count.recipes)}
                          </td>
                        )
                      }
                    )}
                  </tr>
            </tbody>
        </table>
      </div>

      {/* Count all recipes of each ingredients */}
      <div className="overflow-x-auto">
        <h2 className="card-title">Count Recipe of All Ingredients</h2>
        <table className="table w-full">
            <tbody>
              <tr>
                <td key={0}>total</td>
                {
                  ingredientRecipeCount.data.map(key => (
                    <td key={1}>{ key.name }</td>
                  ))
                }
              </tr>
                  <tr>
                    <td key={0}>
                      {JSON.stringify(ingredientRecipeCount.total)}
                    </td>
                    {ingredientRecipeCount.data.map((recipe, i) => {
                        return (
                          <td key={i}>
                            {JSON.stringify(recipe._count.recipes)}
                          </td>
                        )
                      }
                    )}
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
  const getMax = await fetch(`${url}/api/aggregate/max`, {
    method: "GET",
  }).then(data => data.json());

  const cuisineRecipeCount = await fetch(`${url}/api/aggregate/cuisine/countRecipe`, {
    method: "GET",
  }).then(data => data.json());

  const ingredientRecipeCount = await fetch(`${url}/api/aggregate/ingredient/countRecipe`, {
    method: "GET",
  }).then(data => data.json());
  
  return {
    props: { 
      getMax: getMax.data._max,
      cuisineRecipeCount: cuisineRecipeCount,
      ingredientRecipeCount: ingredientRecipeCount
    }
  }
}

export default getMax;