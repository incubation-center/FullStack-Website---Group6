import { observable, action, computed, makeObservable } from "mobx";

class RecipeStore {
  @observable recipes = [];

  constructor() {
    makeObservable(this);
  }

  @action setRecipes = (recipes) => {
    this.recipes = recipes;
  };

  @action addRecipe = (recipe) => {
    this.recipes.push(recipe);
  };

  @action removeRecipe = (recipe) => {
    this.recipes = this.recipes.filter((r) => r !== recipe);
  };

  @computed get recipeCount() {
    return this.recipes.length;
  }
}

export default new RecipeStore();
