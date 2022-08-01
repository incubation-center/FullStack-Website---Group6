import RecipesCard from '../components/recipes-card'

export default function Cookbooks ()
{
  return (
    <div>
      <div className="flex flex-row space-x-5 m-5 justify-end">
        <h2 className="text-xl font-bold">Calories</h2>
        <input type="range" min="0" max="100" className="range range-primary range-sm w-1/4 my-1" />
        <h2 className="text-xl font-bold">Duration</h2>
        <input type="range" min="0" max="100" className="range range-primary range-sm w-1/4 my-1" />
      </div>     

      <div className="flex flex-row justify-end m-5">
        <select class="select ghost w-full max-w-xs shadow-md mx-5">
          <option disabled selected>Filter by categories</option>
          <option>Khmer</option>
          <option>Western</option>
          <option>Indian</option>
          <option>Chinese</option>
          <option>Japanese</option>
        </select>
        <select class="select ghost w-full max-w-xs shadow-md mx-5">
          <option disabled selected>Recipes Types</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Supper</option>
        </select>
      </div>     

      <div className="flex flex-wrap justify-around my-5">
        <RecipesCard />
        <RecipesCard />
        <RecipesCard />
        <RecipesCard />
        <RecipesCard />
        <RecipesCard />
        <RecipesCard />
        <RecipesCard />
        <RecipesCard />
        <RecipesCard />
        <RecipesCard />
        <RecipesCard />
      </div>    
    </div>  
  )
}