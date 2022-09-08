import { observable, action, computed, makeObservable } from "mobx";

class IngredientStore {
  @observable allIngredients = [];
  @observable remainingIngredients = [];
  @observable selectedIngredients = [];

  constructor() {
    makeObservable(this);
  }

  @action isExist = (id) => {
    return this.selectedIngredients.some((ingredient) => ingredient.id === id);
  };

  @action setRemainingIngredients = (ingredients) => {
    this.remainingIngredients = ingredients;
  };

  @action addIngredient = (ingredient) => {
    this.selectedIngredients.push(ingredient);
    this.remainingIngredients = this.remainingIngredients.filter(
      (r) => r.id !== ingredient.id
    );
  };

  @action removeIngredient = (ingredient) => {
    this.setRemainingIngredients([...this.remainingIngredients, ingredient]);
    this.selectedIngredients = this.selectedIngredients.filter(
      (r) => r.id !== ingredient.id
    );
  };

  @action clearAll = () => {
    this.selectedIngredients = [];
    this.remainingIngredients = this.allIngredients;
  };

  @computed get getIngredients() {
    return this.selectedIngredients;
  }
}

export default new IngredientStore();
