import Navbar from "../components/navbar";
import Footer from "../components/footer";
import IngredientsList from "../components/ingredients-list.js";
import IngredientTabs from "../components/ingredient-tabs.js";

export default function Home ()
{
  return (
    <div
      className="flex flex-col justify-between"
      style={ { minHeight: "100vh" } }
    >
      <Navbar />
      <div className="flex-1 p-8 h-full justify-center md:flex">
        <div className="md:order-last md:ml-4">
          <IngredientsList text="Find Recipes" />
        </div>

        <div className="h-4 md:hidden" />
        <div className="md:grow">
          {/* Search Bar */ }
          <div className="form-control mb-4">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Ingredients */ }
          <IngredientTabs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
