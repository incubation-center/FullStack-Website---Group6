import { observable, action, computed, makeObservable } from "mobx";

class RecipeResultStore {
  @observable recipeResult = [];

  constructor() {
    makeObservable(this);
  }

  @action setRecipeResult = (recipes) => {
    this.recipeResult = recipes;
  };

  @computed get recipeResultCount() {
    return this.recipeResult.length;
  }
}

export default new RecipeResultStore();
