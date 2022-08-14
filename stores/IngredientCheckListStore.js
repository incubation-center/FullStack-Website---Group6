import { observable, action, computed, makeObservable } from "mobx";

class IngredientCheckListStore {
  @observable selectedIngredients = [];

  constructor() {
    makeObservable(this);
  }

  @action isExist = (id) => {
    return this.selectedIngredients.some((ingredient) => ingredient.id === id);
  };

  @action addIngredient = (ingredient) => {
    this.selectedIngredients.push(ingredient);
  };

  @action removeIngredient = (ingredient) => {
    this.selectedIngredients = this.selectedIngredients.filter(
      (r) => r.id !== ingredient.id
    );
  };

  @action clearAll = () => {
    this.selectedIngredients = [];
  };

  @computed get getIngredients() {
    return this.selectedIngredients;
  }
}

export default new IngredientCheckListStore();
