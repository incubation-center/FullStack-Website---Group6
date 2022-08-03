import Navbar from '../components/navbar'
import Footer from '../components/footer'
import IngredientsList from '../components/ingredients-list.js'

export default function Home ()
{
  return (
    <div>
      <Navbar />

      <div className="m-10">
        Welcome Home!
        <button className="btn m-10">Hello daisyUI</button>
        <IngredientsList />
      </div>

      <Footer />
    </div>
  )
}
