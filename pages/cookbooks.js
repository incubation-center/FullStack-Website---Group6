import Navbar from '../components/navbar';
import Footer from '../components/footer';
import RecipesCard from '../components/recipes-card';

function Cookbooks ()
{
  let result = [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ];
  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row justify-end md:space-x-5 space-y-5 md:space-y-0 m-5">
        <div className="flex flex-row space-x-5 basis-1/2 xl:basis-1/3">
          <h2 className="text-xl font-bold">Calories</h2>
          <input type="range" min="0" max="100" className="range range-primary range-sm my-1" />
        </div>
        <div className="flex flex-row space-x-5 basis-1/2 xl:basis-1/3">
          <h2 className="text-xl font-bold">Duration</h2>
          <input type="range" min="0" max="100" className="range range-primary range-sm my-1" />
        </div>
      </div>     

      <div className="flex flex-col md:flex-row justify-end items-center space-y-5 md:space-y-0 m-5">
        <select className="select ghost w-full max-w-xs shadow-md mx-5">
          <option disabled selected>Filter by categories</option>
          <option>Khmer</option>
          <option>Western</option>
          <option>Indian</option>
          <option>Chinese</option>
          <option>Japanese</option>
        </select>
        <select className="select ghost w-full max-w-xs shadow-md mx-5">
          <option disabled selected>Recipes Types</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Supper</option>
        </select>
      </div>     

      <div className="flex flex-wrap justify-around my-5">
        { result.map( ( recipe, index ) =>
        {
          return (
            <div key={ index } className="flex justify-center">
              <RecipesCard />
            </div>
          );
        } ) }
      </div>  
      
      <Footer />
    </div>  
  )
}

export default Cookbooks;
