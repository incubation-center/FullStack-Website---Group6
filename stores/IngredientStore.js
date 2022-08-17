import { observable, action, computed, makeObservable } from "mobx";

class IngredientStore {
  @observable allIngredients = [
    {
      id: 11,
      name: "apple",
      categoryId: 1,
    },
    {
      id: 12,
      name: "banana",
      categoryId: 1,
    },
    {
      id: 13,
      name: "orange",
      categoryId: 1,
    },
    {
      id: 21,
      name: "carrot",
      categoryId: 2,
    },
    {
      id: 22,
      name: "potato",
      categoryId: 2,
    },
    {
      id: 23,
      name: "tomato",
      categoryId: 2,
    },
    {
      id: 31,
      name: "beef",
      categoryId: 3,
    },
    {
      id: 32,
      name: "pork",
      categoryId: 3,
    },
    {
      id: 33,
      name: "chicken",
      categoryId: 3,
    },
  ];
  @observable remainingIngredients = this.allIngredients;
  @observable selectedIngredients = [];

  constructor() {
    makeObservable(this);
  }

  @action isExist = (id) => {
    return this.selectedIngredients.some((ingredient) => ingredient.id === id);
  };

  @action addIngredient = (ingredient) => {
    this.selectedIngredients.push(ingredient);
    this.remainingIngredients = this.remainingIngredients.filter(
      (r) => r.id !== ingredient.id
    );
  };

  @action removeIngredient = (ingredient) => {
    this.selectedIngredients = this.selectedIngredients.filter(
      (r) => r.id !== ingredient.id
    );
    this.remainingIngredients.push(ingredient);
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
