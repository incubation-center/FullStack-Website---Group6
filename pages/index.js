import IngredientsList from "../components/ingredients-list.js";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import IngredientTabs from "../components/IngredientTabs.js";

function Home() {
  return (
    <div
      className="flex flex-col justify-between"
      style={{ minHeight: "100vh" }}
    >
      <Navbar />
      <div className="flex-1 p-8 h-full justify-center md:flex">
        <div className="md:order-last md:ml-4">
          <IngredientsList />
        </div>

        <div className="h-4 md:hidden" />
        <div className="md:grow">
          <IngredientTabs />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
