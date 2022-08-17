import { motion } from 'framer-motion';
import Link from "next/link";
import { inject, observer } from "mobx-react";

function IngredientsList(props) {
  const { selectedIngredients, removeIngredient, isExist, clearAll } =
    props.ingredientStore;

  return (
    <div className="container md:w-96 bg-primary min-h-fit">
      <div className="card md:w-96 bg-accent shadow-md min-h-fit">
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
              <button className="btn btn-primary text-accent text-lg">
                {props.text}
              </button>
            </Link>
          </div>
          <motion.div
            className="flex flex-row justify-end text-lg cursor-pointer hover:text-primary my-2"
            onClick={ () => clearAll() }
            whileTap={ { scale: 0.9 } } >
            <svg className="color: red; h-8 w-8 hover:animate-spin" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="red" />
            </svg>
            Clear all
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default inject("ingredientStore")(observer(IngredientsList));
