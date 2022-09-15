import { observable, action, computed, makeObservable } from "mobx";

class RecipeResultStore {
  @observable totalRecipeResult = 0;

  constructor() {
    makeObservable(this);
  }

  @action setTotalRecipeResult = (total) => {
    this.totalRecipeResult = total;
  };

}

export default new RecipeResultStore();
