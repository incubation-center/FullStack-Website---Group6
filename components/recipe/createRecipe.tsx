import { useRouter } from "next/router";
import { useState } from "react";


interface RecipeTestObject {
  name: String;
  description: String;
}

export const CreateRecipe = () => {
  const defaultRecipe: RecipeTestObject = {
    name: "test1",
    description: "Test1",
  };
  const [newRecipe, setNewAsset] = useState(defaultRecipe);
  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);

  const createDefaultRecipeTest = async () => {
    const body = newRecipe;
    await fetch("/api/recipe/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    console.log("Test Recipe Object Created. 201.");

    refreshData();
    setNewAsset(defaultRecipe);
  };

  return (
    <div className="bg-white rounded-md p-12 shadow-md flex justify-between">
      <button
        onClick={async (e) => {
          e.preventDefault();
          await createDefaultRecipeTest();
        }}
        className="bg-purple-400 p-2 rounded-md text-white font-bold border-2 border-purple-500 outline-none cursor-pointer"
      >
        Add +
      </button>
    </div>
  );
};
