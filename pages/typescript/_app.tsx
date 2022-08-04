import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "mobx-react";
import RecipeStore from '../../stores/RecipeStore';

function App({ Component, pageProps }: AppProps) {
  return <Provider recipeStore={RecipeStore}>
    <Component {...pageProps} />
  </Provider>
}

export default App
