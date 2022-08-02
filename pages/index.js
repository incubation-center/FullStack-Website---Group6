import IngredientsList from '../components/ingredients-list.js'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Ingredients from '../components/Ingredients.js';

function Home()
{
  return (
    <div className='flex flex-col justify-between' style={{minHeight: "100vh"}}>
      <Navbar/>
      <div className='flex-1 p-8 h-full justify-center'>
        <IngredientsList/>
        <div className='h-4 lg:hidden'/>      
        <Ingredients/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;