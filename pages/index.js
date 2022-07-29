import RecipesCard from '../components/recipes-card'
import BookmarksCard from '../components/bookmarks-card'

export default function Home ()
{
  return (
    <div className="m-10">
      Welcome Home! 
      <button className="btn">Hello daisyUI</button>
      <BookmarksCard />
      <RecipesCard />
    </div>
  )
}
