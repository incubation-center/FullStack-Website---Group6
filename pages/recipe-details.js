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
    <div className="flex flex-col justify-around min-h-screen ">
      <Navbar />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 dark:bg-neutral">
        <div className="row-span-6 justify-around sm:pt-10">
          <figure className="flex justify-around m-5 md:m-2 lg:ml-5 xl:m-0">
            <Image src="/kokos_curry.png" width={ 390 } height={ 390 } alt="Kokos Curry" />
          </figure>
          <h1 className="text-2xl lg:text-3xl dark:text-accent font-bold text-center m-5 pt-5">Kokos Curry</h1>

          <div className="mx-10 md:mx-4 lg:mx-10">
            <RecipeTags />
          </div>
        </div>

        <div className="col-span-3 pt-0 md:pt-10 xl:p-10">
          <RecipeNutrients />
        </div>

        <div className="grid grid-cols-1 col-span-2 md:grid-cols-2 md:col-span-3 gap-5 p-5">
          <div>
            <Ingredients />
          </div>
          <div>
            <Instructions />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RecipeDetails;
