import RecipesCard from '../components/recipes-card'
import BookmarksCard from '../components/bookmarks-card'
import IngredientsList from '../components/ingredients-list.js'

export default function Home ()
{
  return (
    <div className="m-10">
      Welcome Home!
      <button className="btn">Hello daisyUI</button>
      <IngredientsList />
    </div>
  )
}
