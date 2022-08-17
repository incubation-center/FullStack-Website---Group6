import React, { useState, useEffect, useCallback } from "react";
import { inject, observer } from "mobx-react";

function IngredientTabs(props) {
  const {
    allIngredients,
    selectedIngredients,
    remainingIngredients,
    isExist,
    addIngredient,
    removeIngredient,
  } = props.ingredientStore;
  const { categories } = props.ingredientCategoryStore;
  const [activeTab, setActiveTab] = useState(1);

  const handleSwitchTab = (id) => {
    setActiveTab(id);
  };

  const TabContent = useCallback(() => {
    return (
      <div className="form-control items-start flex border border-t-0 p-4 px-12">
        {remainingIngredients.map((ingredient) => {
          return (
            <div key={ingredient.id} className="flex-1">
              {ingredient.categoryId === activeTab && (
                <label className="label cursor-pointer py-4">
                  <input
                    type="checkbox"
                    className="checkbox"
                    // defaultChecked={isExist(ingredient.id)}
                    // defaultValue={ingredient.id}
                    onChange={() => addIngredient(ingredient)}
                  />
                  <span className="label-text ml-5 capitalize text-lg">
                    {ingredient.name}
                  </span>
                </label>
              )}
            </div>
          );
        })}
      </div>
    );
  }, [activeTab, addIngredient, remainingIngredients]);

  return (
    <div className="h-full flex flex-col overflow-x-scroll">
      {/* Tab nav */}
      <ul className="flex text-center border-b border-gray-200">
        {categories.map((category) => {
          return (
            <li
              key={category.id}
              className={`flex-1 block p-4 rounded-t-lg capitalize cursor-pointer font-bold text-lg ${
                activeTab === category.id
                  ? "relative bg-white border-t border-l border-r border-gray-200"
                  : "text-gray-500"
              }`}
              onClick={() => handleSwitchTab(category.id)}
            >
              {activeTab === category.id && (
                <span className="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
              )}
              {category.name}
            </li>
          );
        })}
      </ul>

      {/* Tab content */}
      <TabContent />
    </div>
  );
}

export default inject(
  "ingredientStore",
  "ingredientCategoryStore"
)(observer(IngredientTabs));
