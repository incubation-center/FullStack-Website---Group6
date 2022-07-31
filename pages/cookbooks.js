import RecipesCard from '../components/recipes-card'

export default function Cookbooks ()
{
  return (
    <div className="flex flex-row justify-around my-5">
      <RecipesCard />
      <RecipesCard />
      <RecipesCard />
      <RecipesCard />
    </div>     
  )
}
