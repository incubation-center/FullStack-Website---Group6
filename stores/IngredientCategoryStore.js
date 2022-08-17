import { observable, action, computed, makeObservable } from "mobx";

class IngredientCategoryStore {
  @observable categories = [
    {
      id: 1,
      name: "fruits",
    },
    {
      id: 2,
      name: "vegetables",
    },
    {
      id: 3,
      name: "meat",
    },
  ];

  constructor() {
    makeObservable(this);
  }
}

export default new IngredientCategoryStore();
