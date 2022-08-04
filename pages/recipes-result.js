import Navbar from "../components/navbar";
import Footer from "../components/footer";
import IngredientsList from "../components/ingredients-list.js";
import RecipesCard from "../components/recipes-card";

function RecipesResult() {
  let result = [{}, {}, {}, {}, {}, {}];
  return (
    <div
      className="flex flex-col justify-between ali"
      style={{ minHeight: "100vh" }}
    >
      <Navbar />

      <div className="flex-1 p-8 justify-center md:flex container self-center">
        <div className="md:order-last md:ml-4">
          <IngredientsList text="Filter Recipes" />
        </div>

        <div className="grow grid lg:grid-cols-2">
          {result.map((recipe, index) => {
            return (
              <div key={index} className="flex justify-center">
                <RecipesCard />
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RecipesResult;
