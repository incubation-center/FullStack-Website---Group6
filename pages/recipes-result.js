import Navbar from "../components/navbar";
import Footer from "../components/footer";
import IngredientsList from "../components/ingredients-list.js";

function RecipesResult() {
  return (
    <div
      className="flex flex-col justify-between"
      style={{ minHeight: "100vh" }}
    >
      <Navbar />

      <div className="flex-1 p-8 justify-center md:flex">
        <IngredientsList text="Filter Recipes" />
      </div>

      <Footer />
    </div>
  );
}

export default RecipesResult;
