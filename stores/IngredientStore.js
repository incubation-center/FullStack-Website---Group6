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
      (r) => r.name.toLowerCase() !== ingredient.name.toLowerCase()
    );
  };

  @action removeIngredient = (ingredient) => {
    this.setRemainingIngredients([...this.remainingIngredients, ingredient]);
    this.selectedIngredients = this.selectedIngredients.filter(
      (r) => r.name.toLowerCase() !== ingredient.name.toLowerCase()
    );
  };

  @action clearAll = () => {
    this.selectedIngredients.map((i) => {
      this.removeIngredient(i);
    });
  };

  @computed get getIngredients() {
    return this.selectedIngredients;
  }
}

export default new IngredientStore();
