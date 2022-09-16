import Link from "next/link";
import { inject, observer } from "mobx-react";

function IngredientList(props) {
  const { selectedIngredients, selectedIngredientIds, removeIngredient, clearAll } =
    props.ingredientStore;

  return (
    <div className="">
      <h2 className="font-bold text-center text-xl sm:text-2xl dark:text-accent">Ingredients</h2>

      <div className="form-control my-5">
        {selectedIngredients &&
          selectedIngredients.map((ingredient, index) => {
            return (
              <label
                key={index}
                className="label cursor-pointer justify-start"
              >
                <input
                  type="checkbox"
                  className="checkbox dark:checkbox-accent"
                  checked
                  // value={isExist(ingredient.id)}
                  onChange={() => removeIngredient([selectedIngredientIds[index], ingredient])}
                />
                <span className="label-text pl-4 text-lg dark:text-accent capitalize">
                  {ingredient}
                </span>
              </label>
            );
          })}
      </div>

      <div className="flex justify-between">
        <button className="btn btn-ghost dark:text-accent dark:hover:bg-accent/25" onClick={ () => clearAll() }>
          Clear all
        </button>

        <Link href={props.text === "Find Recipes" ? "/recipe-results" : "/"}>
          <button className="btn btn-primary text-accent text-lg">
            {props.text}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default inject("ingredientStore")(observer(IngredientList));
