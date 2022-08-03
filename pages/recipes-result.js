import Navbar from '../components/navbar'
import Footer from '../components/footer'
import IngredientsList from "../components/ingredients-list.js";

export default function RecipesResult ()
{
  return (
    <div>
      <Navbar />

      <div className="flex-1 p-8 justify-center md:flex">
        <IngredientsList text="Filter Recipes" />
      </div>

      <Footer />
    </div>
  )
}
