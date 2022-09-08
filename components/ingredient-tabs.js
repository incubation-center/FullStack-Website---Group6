import React, { useState, useCallback, useEffect, Fragment } from "react";
import { inject, observer } from "mobx-react";
import Image from "next/image";

function IngredientTabs({
  ingredientStore,
  ingredientCategoryStore,
  keyword,
  dbIngredientCategory,
  allIngredients,
}) {
  const { remainingIngredients, addIngredient, setRemainingIngredients } =
    ingredientStore;
  const { categories, setCategories } = ingredientCategoryStore;
  const [activeTab, setActiveTab] = useState(1);

  const handleSwitchTab = (id) => {
    setActiveTab(id);
  };

  useEffect(() => {
    setCategories(dbIngredientCategory);
    setRemainingIngredients(allIngredients);
  }, []);

  const TabContent = useCallback(() => {
    // const sortedIngredients = remainingIngredients.sort((a, b) =>
    //   a.name > b.name ? 1 : -1
    // );
    // setRemainingIngredients(sortedIngredients);
    // const ingredientByCategory = remainingIngredients.filter(
    //   (r) => r.categoryId === activeTab
    // );

    let ingredientByCategory = dbIngredientCategory[activeTab - 1].ingredients;

    return (
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 form-control border border-t-0 p-4 px-12 ${
          ingredientByCategory.length > 0 ? "items-start" : "items-center"
        }`}
      >
        {ingredientByCategory.length > 0 ? (
          ingredientByCategory.map((ingredient, index) => {
            return (
              <div key={index} className="flex items-start">
                <label className="label cursor-pointer py-4">
                  <input
                    type="checkbox"
                    className="checkbox dark:checkbox-accent"
                    onChange={() => addIngredient(ingredient)}
                  />
                  <span className="label-text capitalize text-lg dark:text-accent ml-5">
                    {ingredient.name}
                  </span>
                </label>
              </div>
            );
          })
        ) : (
          <Image
            src="https://cdni.iconscout.com/illustration/free/thumb/empty-box-4085812-3385481.png"
            alt="empty tab"
            width={200}
            height={200}
          />
        )}
      </div>
    );
  }, [activeTab, addIngredient, dbIngredientCategory]);

  const IngredientTab = useCallback(() => {
    const filtered = remainingIngredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(keyword.toLowerCase())
    );
    const ingredientByCategory = filtered;

    return (
      <div
        className={`grid gap-2 form-control border rounded-t-lg p-4 px-12 ${
          ingredientByCategory.length > 0
            ? "items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "items-center grid-cols-1"
        } `}
      >
        {ingredientByCategory.length > 0 ? (
          ingredientByCategory.map((ingredient, index) => {
            return (
              <div key={index} className="flex items-start">
                <label className="label cursor-pointer py-4">
                  <input
                    type="checkbox"
                    className="checkbox dark:checkbox-accent"
                    onChange={() => addIngredient(ingredient)}
                  />
                  <span className="label-text capitalize text-lg dark:text-accent ml-5">
                    {ingredient.name}
                  </span>
                </label>
              </div>
            );
          })
        ) : (
          <div className="flex justify-center">
            <Image
              src="https://cdni.iconscout.com/illustration/free/thumb/empty-box-4085812-3385481.png"
              alt="empty tab"
              width={200}
              height={200}
            />
          </div>
        )}
      </div>
    );
  }, [addIngredient, keyword, remainingIngredients]);

  return (
    <div>
      <div className="h-full flex flex-col overflow-x-scroll">
        {/* Tab nav */}
        {keyword == "" ? (
          <Fragment>
            <ul className="flex text-center border-b border-base-200">
              {categories.map((category) => {
                return (
                  <li
                    key={category.id}
                    className={`flex-1 block p-4 rounded-t-lg capitalize cursor-pointer font-bold text-lg ${
                      activeTab === category.id
                        ? "relative bg-accent dark:bg-neutral dark:text-accent border-t border-l border-r border-base-200"
                        : "text-neutral/50 dark:text-accent/50"
                    }`}
                    onClick={() => handleSwitchTab(category.id)}
                  >
                    {activeTab === category.id && (
                      <span className="absolute inset-x-0 w-full h-px bg-accent dark:bg-neutral -bottom-px"></span>
                    )}
                    {category.name}
                  </li>
                );
              })}
            </ul>

            {/* Tab content */}
            <TabContent />
          </Fragment>
        ) : (
          <IngredientTab />
        )}
      </div>
    </div>
  );
}

export default inject(
  "ingredientStore",
  "ingredientCategoryStore"
)(observer(IngredientTabs));
