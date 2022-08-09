import { observable, action, computed, makeObservable } from "mobx";

class RecipeStore {
  @observable recipes = [];

  constructor() {
    makeObservable(this);
  }

  @action addRecipe = (recipe) => {
    this.recipes.push(recipe);
  };

  @action removeRecipe = (recipe) => {
    this.recipes = this.recipes.filter((r) => r !== recipe);
  };

  @computed get getRecipes() {
    return this.recipes;
  }
}

export default new RecipeStore();
