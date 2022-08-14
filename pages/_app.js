import "../styles/globals.css";
import { Provider } from "mobx-react";
import RecipeStore from "../stores/RecipeStore";
import IngredientCheckListStore from "../stores/IngredientCheckListStore";

function MyApp({ Component, pageProps }) {
  return (
    <Provider
      recipeStore={RecipeStore}
      ingredientCheckListStore={IngredientCheckListStore}
    >
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
