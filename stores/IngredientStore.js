import { observable, action, computed, makeObservable } from "mobx";

class IngredientStore {
  @observable selectedIngredients = [];
  @observable selectedIngredientIds = [];

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
    this.selectedIngredientIds.push(ingredient[0]);
    this.selectedIngredients.push(ingredient[1]);
  };

  @action removeIngredient = (ingredient) => {

    console.log(ingredient)
    this.selectedIngredientIds = this.selectedIngredientIds.filter(
      (r) => r !== ingredient[0]
    );
    this.selectedIngredients = this.selectedIngredients.filter(
      (r) => r.toLowerCase() !== ingredient[1].toLowerCase()
    );
    
  };

  @action clearAll = () => {
    this.selectedIngredients = [];
    this.selectedIngredientIds = [];
  };

  @computed get getIngredients() {
    return this.selectedIngredients;
  }
}

export default new IngredientStore();
