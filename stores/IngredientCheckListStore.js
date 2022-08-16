import { observable, action, computed, makeObservable } from "mobx";

class IngredientCheckListStore {
  @observable allIngredients = [
    {
      id: 1,
      name: "fruits",
      items: [
        {
          id: 11,
          name: "apple",
        },
        {
          id: 12,
          name: "banana",
        },
        {
          id: 13,
          name: "orange",
        },
      ],
    },
    {
      id: 2,
      name: "vegetables",
      items: [
        {
          id: 21,
          name: "carrot",
        },
        {
          id: 22,
          name: "potato",
        },
        {
          id: 23,
          name: "tomato",
        },
      ],
    },
    {
      id: 3,
      name: "meat",
      items: [
        {
          id: 31,
          name: "beef",
        },
        {
          id: 32,
          name: "pork",
        },
        {
          id: 33,
          name: "chicken",
        },
      ],
    },
  ];
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
