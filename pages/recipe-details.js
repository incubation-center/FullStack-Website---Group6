import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import RecipeTags from "../components/recipe-tags";
import RecipeNutrients from "../components/recipe-nutrients";
import Ingredients from "../components/ingredients";
import Instructions from "../components/instructions";

function RecipeDetails ()
{
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-3 my-10">
        <div className="mx-10">
          <Ingredients />
        </div>

        <div className="justify-center">
          <figure className="flex justify-center">
            <Image src="/kokos_curry.png" width={ 390 } height={ 390 } alt="Kokos Curry" />
          </figure>
          <h1 className="text-3xl font-bold text-center my-10">Kokos Curry</h1>

          <RecipeTags />
          <RecipeNutrients />
          
        </div>

        <div className="mx-10">
          <Instructions />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RecipeDetails;
