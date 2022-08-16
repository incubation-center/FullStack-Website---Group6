import Link from "next/link";
import { inject, observer } from "mobx-react";

function IngredientsList(props) {
  const { selectedIngredients, removeIngredient, isExist, clearAll } =
    props.ingredientCheckListStore;

  return (
    <div className="container md:w-96 bg-primary min-h-fit">
      <div className="card md:w-96 bg-base-100 shadow-md min-h-fit">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">Ingredients</h2>
          <div className="form-control grow min-h-16">
            {selectedIngredients &&
              selectedIngredients.map((ingredient, index) => {
                return (
                  <label
                    key={index}
                    className="label cursor-pointer justify-start"
                  >
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked
                      // value={isExist(ingredient.id)}
                      onChange={() => removeIngredient(ingredient)}
                    />
                    <span className="label-text px-4 text-lg capitalize">
                      {ingredient.name}
                    </span>
                  </label>
                );
              })}
          </div>
          <div className="card-actions">
            <Link href="/recipes-result">
              <button className="btn btn-primary text-base-100 text-lg">
                {props.text}
              </button>
            </Link>
          </div>
          <div
            className="justify-end text-lg cursor-pointer"
            onClick={() => clearAll()}
          >
            ❌ Clear all
          </div>
        </div>
      </div>
    </div>
  );
}

export default inject("ingredientCheckListStore")(observer(IngredientsList));
