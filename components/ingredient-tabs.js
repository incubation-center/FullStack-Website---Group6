import React, { useState, useEffect, useCallback } from "react";
import { inject, observer } from "mobx-react";

function IngredientTabs(props) {
  const {
    allIngredients,
    selectedIngredients,
    isExist,
    addIngredient,
    removeIngredient,
  } = props.ingredientCheckListStore;
  const [activeTab, setActiveTab] = useState(1);

  const handleSwitchTab = (id) => {
    setActiveTab(id);
  };

  // const reRender = () => {
  //   this.forceUpdate();
  // };

  const TabContent = useCallback(() => {
    return (
      <div>
        {allIngredients.map((ingredient) => {
          return (
            <div key={ingredient.id} className="flex-1">
              {ingredient.id === activeTab && (
                <div className="form-control items-start flex border border-t-0 p-4 px-12 grow">
                  {ingredient.items.map((item) => {
                    return (
                      // !isExist(item.id) && (
                      <label
                        key={item.id}
                        className="label cursor-pointer py-4"
                      >
                        <input
                          type="checkbox"
                          className="checkbox"
                          defaultChecked={isExist(item.id)}
                          defaultValue={item.id}
                          onChange={() => {
                            if (isExist(item.id)) {
                              removeIngredient(item);
                            } else addIngredient(item);
                          }}
                        />
                        <span className="label-text ml-5 capitalize text-lg">
                          {item.name}
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }, [activeTab, addIngredient, allIngredients, isExist, removeIngredient]);

  return (
    <div className="h-full flex flex-col overflow-x-scroll">
      {/* Tab nav */}
      <ul className="flex text-center border-b border-gray-200">
        {allIngredients.map((ingredient) => {
          return (
            <li
              key={ingredient.id}
              className={`flex-1 block p-4 rounded-t-lg capitalize cursor-pointer font-bold text-lg ${
                activeTab === ingredient.id
                  ? "relative bg-white border-t border-l border-r border-gray-200"
                  : "text-gray-500"
              }`}
              onClick={() => handleSwitchTab(ingredient.id)}
            >
              {activeTab === ingredient.id && (
                <span className="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
              )}
              {ingredient.name}
            </li>
          );
        })}
      </ul>

      {/* Tab content */}
      <TabContent />
    </div>
  );
}

export default inject("ingredientCheckListStore")(observer(IngredientTabs));
