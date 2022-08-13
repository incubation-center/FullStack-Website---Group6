import "../styles/globals.css";
import { Provider } from "mobx-react";
import RecipeStore from "../stores/RecipeStore";

function MyApp({ Component, pageProps }) {
  return (
    <Provider recipeStore={RecipeStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
