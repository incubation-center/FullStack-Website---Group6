import fs from "fs";
import path from "path";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import { DeleteRecipe } from "../components/recipe/deleteRecipe";
import { DeleteIngredient } from "../components/ingredient/deleteIngredient";
import { prisma } from '../lib/prisma';


function RecipesResult({
  recipes, 
  ingredients, 
  recipe_category, 
  cuisines,
  dbRecipeCategory,
  dbCuisines
}) {

  const createRecipeFromJson = async (event) => {
    for (const i in recipes) {
      const rec = recipes[i];
      if (rec["instructions"].length < 1) {
        continue
      }

      let nutrientsPerServing = {};
      Object.keys(rec["nutrientsPerServing"]).map(
        (nutrient_type) => {
          const nutrient = rec["nutrientsPerServing"][nutrient_type];
          if (isNaN(parseInt(nutrient))) {
            nutrientsPerServing[nutrient_type] = 0;
          } else {
            nutrientsPerServing[nutrient_type] = nutrient;
          }
        }
      );

      const rec_object = {
        name: rec["name"],
        cleanName: rec["cleanName"],
        durationSecond: rec["totalTimeInSeconds"],
        durationString: rec["totalTime"] || "placeholder",
        ingredientCount: rec["ingredients"].length,
        ingredientLine: rec["ingredientLines"].join("\n"),
        ingredientLineCount: rec["ingredientLines"].length,
        numberOfServings: rec["numberOfServings"],
        instruction: rec["instructions"].join("\n"),
        imageLink: rec["mainImage"],
        calories: nutrientsPerServing["calories"],
        protein: nutrientsPerServing["protein"],
        carb: nutrientsPerServing["carbs"],
        fiber: nutrientsPerServing["fiber"],
        fat: nutrientsPerServing["fat"],
        sugar: nutrientsPerServing["sugar"],
        cholesterol: nutrientsPerServing["cholesterol"],
        weightGram: rec["weightInGrams"],
      }
      /* NOTE: Show the records in the database
        
        docker exec -it postgres psql ingredeck postgres
        select * from "Recipe";
      */

      // query the list of ingredient objects
      const ingredients = await fetch("api/ingredient/all", {
        body: JSON.stringify({
          "where": {
            "OR": rec["ingredients"]
          },
          "select": {
            "id": true
          }
        }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }).then(res => res.json());
      rec_object["ingredients"] = {
        "connect": ingredients
      }

      // query from DB the list of recipe categories 
      let categories_query = [];
      (rec["mealTags"] || []).map(mealtag => {
        if (mealtag) categories_query.push({"name": mealtag})
      });
      
      let categories = []
      if (categories_query != []) {
        categories = await fetch("api/recipeCategory/all", {
          body: JSON.stringify({
            "where": {
              "OR": categories_query
            },
            "select": {
              "id": true
            }
          }),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }).then(res => res.json());
      }

      // query from DB the list of recipe cuisines 
      let cuisines_query = [];

      let cuisines_map = rec["cuisines"];
      if (!Array.isArray(cuisines_map) || cuisines_map.filter(Boolean).length === 0) {
        cuisines_map = ["World"];
      }
      cuisines_map.map(cuisine => {
        if (cuisine) cuisines_query.push({"name": cuisine})
      });

      let cuisines = []
      if (cuisines_query != []) {
        cuisines = await fetch("api/cuisine/all", {
          body: JSON.stringify({
            "where": {
              "OR": cuisines_query
            },
            "select": {
              "id": true
            }
          }),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }).then(res => res.json());
      }
      // console.log(`categories ${categories} | cuisines ${cuisines}`)
      
      rec_object["categories"] = {
        "connect": categories
      }
      rec_object["cuisines"] = {
        "connect": cuisines
      }
      // console.log(rec_object);
      // create the recipe object in db
      const res = await fetch("api/recipe/create", {
        body: JSON.stringify(rec_object),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
    }

  }

  const createIngredientsFromJson = async (event) => {
    await Promise.all(ingredients.map(async ingre_name => {
      // only recipe with any relations
      const ingredient_object = {
        name: ingre_name,
      }

      /* NOTE: Show the records in the database
      
        https://stackoverflow.com/questions/2596670/how-do-you-find-the-row-count-for-all-your-tables-in-postgres

        docker exec -it postgres psql ingredeck postgres
        select * from "Ingredient";
      */
      const res = await fetch("api/ingredient/create", {
        body: JSON.stringify(ingredient_object),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
    }));
  }

  const createCuisine = async (event) => {
    await Promise.all(
      cuisines.map(async cuisine_name => {
        const cuisine_object = {
          "name": cuisine_name
        }
        const res = await fetch("api/cuisine/create", {
          body: JSON.stringify(
            cuisine_object
          ),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
      })
    );
  }

  const createRecipeCategory = async (event) => {
    await Promise.all(
      recipe_category.map(async category_name => {
        const recipe_category_query = {
          "name": category_name
        }
        const res = await fetch("api/recipeCategory/create", {
          body: JSON.stringify(
            recipe_category_query
          ),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
      })
    );
  }

  return (
    <div
      className="flex flex-col justify-between"
      style={ { minHeight: "100vh" } }
    >
      <Navbar />
      <div className="flex-1 p-5 h-full justify-center md:flex dark:bg-neutral">
        <div className="m-0 sm:m-px md:my-5 md:ml-5 lg:m-5 md:order-last">
          {/* <IngredientList text="Find Recipes" /> */}
          <h2 className="text-xl lg:text-2xl dark:text-accent font-bold m-3">
            Recipe Category
          </h2>
          <button
            onClick={ createRecipeCategory }
            className="inline-block px-5 py-3 text-sm font-medium text-accent bg-primary rounded-lg"
            disabled={ true }
          >
                Step 1: Add Recipe Category
          </button>
          <div className="items-center grid-flow-col">
            <p>From JSON: { JSON.stringify(recipe_category) }</p>
          </div>

        </div>
        <div className="m-0 sm:m-px md:my-5 md:ml-5 lg:m-5 md:order-last">
          <h2 className="text-xl lg:text-2xl dark:text-accent font-bold m-3">
            Cuisines
          </h2>
          <button
            onClick={ createCuisine }
            className="inline-block px-5 py-3 text-sm font-medium text-accent bg-primary rounded-lg"
            disabled={ true }
          >
                Step 2: Add Recipe Cuisine
          </button>
          <div className="items-center grid-flow-col">
            <p>From JSON: { JSON.stringify(cuisines) }</p>
          </div>
        </div>

      </div>
      <div className="flex-1 p-5 h-full justify-center md:flex dark:bg-neutral">
        <div className="m-0 sm:m-px md:my-5 md:ml-5 lg:m-5 md:order-last">
          {/* <IngredientList text="Find Recipes" /> */}
          <h2 className="text-xl lg:text-2xl dark:text-accent font-bold m-3">
            Ingredients
          </h2>
          <button
            onClick={ createIngredientsFromJson }
            className="inline-block px-5 py-3 text-sm font-medium text-accent bg-primary rounded-lg"
            disabled={ true }
          >
                Step 3: Add Ingredients from file
          </button>

          <DeleteIngredient />   

        </div>
        <div className="m-0 sm:m-px md:my-5 md:ml-5 lg:m-5 md:order-last">
          <h2 className="text-xl lg:text-2xl dark:text-accent font-bold m-3">
            Recipe
          </h2>
          <button
            onClick={ createRecipeFromJson }
            className="inline-block px-5 py-3 text-sm font-medium text-accent bg-primary rounded-lg"
            disabled={ true }
          >
                Step 4: Read Json File and Add recipe
          </button>

          <DeleteRecipe />
        </div>

      </div>

      {/* Show Data From DB */}
      <h2 className="card-title">DB Recipe Category</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
            <tbody>
              {
                dbRecipeCategory.map(category => (
                  <tr key={category.id}>
                    {Object.keys(category).map((info, i) => (
                      <td key={i}>{JSON.stringify(category[info])}</td>
                    ))}
                  </tr>
                ))
              }
            </tbody>
        </table>
      </div>

      <h2 className="card-title">DB Cuisine</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
            <tbody>
              {
                dbCuisines.map(cuisine => (
                  <tr key={cuisine.id}>
                    {Object.keys(cuisine).map((info, i) => (
                      <td key={i}>{JSON.stringify(cuisine[info])}</td>
                    ))}
                  </tr>
                ))
              }
            </tbody>
        </table>
      </div>

      <ScrollTop />

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const DIR_PATH = 'lib/data';

  const filename_ingredients = 'all_ingredients.json';
  let ingredients = JSON.parse(
    fs.readFileSync(path.resolve(DIR_PATH, filename_ingredients), {encoding: "utf8"})
  );

  // Read json files and put recipe objects
  const filename = 'all_recipes.json';
  let recipes = JSON.parse(
    fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"})
  );

  let recipe_category = new Set();
  let cuisines = new Set();
  recipes.map(recipe => {
    (recipe["mealTags"] || []).forEach(mealtag => {if (mealtag) recipe_category.add(mealtag)});
    (recipe["cuisines"] || []).forEach(cuisine => {if (cuisine) cuisines.add(cuisine)});
  })

  const dbRecipeCategory = await prisma.recipeCategory.findMany();
  const dbCuisines = await prisma.cuisine.findMany();

  return {
    props: { 
      recipes: recipes,
      ingredients: ingredients,
      recipe_category: Array.from(recipe_category),
      cuisines: Array.from(cuisines),
      dbRecipeCategory: JSON.parse(JSON.stringify(dbRecipeCategory)),
      dbCuisines: JSON.parse(JSON.stringify(dbCuisines))
    }
  }
}

export default RecipesResult;