import "../styles/globals.css";
import { Provider } from "mobx-react";
import RecipeStore from "../stores/RecipeStore";
import IngredientStore from "../stores/IngredientStore";
import IngredientCategoryStore from "../stores/IngredientCategoryStore";
import BookmarkStore from "../stores/BookmarkStore";

function MyApp({ Component, pageProps }) {
  return (
    <Provider
      recipeStore={RecipeStore}
      ingredientStore={IngredientStore}
      ingredientCategoryStore={IngredientCategoryStore}
      bookmarkStore={BookmarkStore}
    >
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
