import Navbar from '../components/navbar';
import Footer from '../components/footer';
import RecipesInfo from '../components/recipes-info';
import Instruction from '../components/instruction';
import Ingredients from '../components/ingredients';

function RecipesDetail ()
{
  return (
    <div>
      <Navbar />

      <div className="flex flex-row justify-around my-10">
        <Instruction />

        <RecipesInfo />

        <Ingredients />
      </div>

      <Footer />
    </div>
  )
}

export default RecipesDetail;
