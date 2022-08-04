import { observable, action, computed, makeObservable } from "mobx";

class RecipeStore {
  @observable recipes: Object[] = [];

  constructor() {
    makeObservable(this);
  }

  @action addRecipe = (recipe: Object[]) => {
    this.recipes.push(recipe);
  }

  @action removeRecipe = (recipe: Object[]) => {
    this.recipes = this.recipes.filter((r) => r !== recipe);
  }

  @computed get getRecipes() {
    return this.recipes;
  }
}

export default new RecipeStore();