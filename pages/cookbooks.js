import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import RecipeCard from "../components/recipe-card";

function Cookbooks ()
{
  let result = [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ];

  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row justify-end md:space-x-5 space-y-5 md:space-y-0 m-5">
        <div className="flex flex-row space-x-5 basis-1/2 xl:basis-1/3">
          <h2 className="text-xl font-bold">Calories</h2>
          <input type="range" min="0" max="100" className="range range-primary range-sm my-1 cursor-grab" />
        </div>
        <div className="flex flex-row space-x-5 basis-1/2 xl:basis-1/3">
          <h2 className="text-xl font-bold">Duration</h2>
          <input type="range" min="0" max="100" className="range range-primary range-sm my-1 cursor-grab" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-end items-center space-y-5 md:space-y-0 m-5">
        {/* Search Bar */ }
        <div className="form-control flex-1 justify-start order-last md:order-first mt-5 md:mt-0">
          <div className="input-group">
            <input type="text" placeholder="Search…" className="input input-bordered" />
            <button className="btn btn-square btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-base-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        <select className="select ghost shrink w-full max-w-xs shadow-md mx-5">
          <option disabled selected>Filter by cuisines</option>
          <option>Asian</option>
          <option>Chinese</option>
          <option>Korean</option>
          <option>British</option>
          <option>American</option>
        </select>
        <select className="select ghost shrink w-full max-w-xs shadow-md mx-5">
          <option disabled selected>Filter by meal times</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snack</option>
          <option>Dessert</option>
        </select>
      </div>

      <div className="flex justify-around md:grid grid-cols-2 my-5 lg:flex flex-wrap">
        { result.map( ( recipe, index ) =>
        {
          return (
            <motion.div
              key={ index }
              className="flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={ { once: true } }
              transition={ { duration: 0.5 } }
              variants={ {
                hidden: { opacity: 0, scale: 1 },
                visible: { opacity: 1, scale: 1 }
              } }
            >
              <RecipeCard />
            </motion.div>
          );
        } ) }
      </div>

      <ScrollTop />

      <Footer />
    </div >
  )
}

export default Cookbooks;
