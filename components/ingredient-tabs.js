import { useState } from "react";
import { inject, observer } from "mobx-react";

function IngredientTabs(props) {
  const { selectedIngredients, isExist, addIngredient, removeIngredient } =
    props.ingredientCheckListStore;
  const [activeTab, setActiveTab] = useState(1);

  const handleSwitchTab = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="h-full flex flex-col overflow-x-scroll">
      {/* Tab nav */}
      <ul className="flex text-center border-b border-gray-200">
        {ingredients.map((ingredient) => {
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
      <div>
        {ingredients.map((ingredient) => {
          return (
            <div key={ingredient.id} className="flex-1">
              {ingredient.id === activeTab && (
                <div className="form-control items-start flex border border-t-0 p-4 px-12 grow">
                  {ingredient.items.map((item) => {
                    return (
                      <label
                        key={item.id}
                        className="label cursor-pointer py-4"
                      >
                        <input
                          type="checkbox"
                          className="checkbox"
                          // checked={isExist(item.id)}
                          value={isExist(item.id)}
                          onChange={(e) => {
                            if (e.target.checked) addIngredient(item);
                            else removeIngredient(item);
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
    </div>
  );
}

export default inject("ingredientCheckListStore")(observer(IngredientTabs));

const ingredients = [
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
