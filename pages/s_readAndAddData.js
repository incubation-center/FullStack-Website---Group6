import fs from "fs";
import path from "path";

import Router from 'next/router';
// import { useState } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import { DeleteRecipe } from "../components/recipe/deleteRecipe";
import { DeleteIngredient } from "../components/ingredient/deleteIngredient";
import { prisma } from "@prisma/client";


function RecipesResult({recipes, ingredients}) {

  const createRecipeFromJson = async (event) => {
    /* console.log("------- Recipe objects -------");
    console.log(recipes); */

    let count = 0

    await Promise.all(recipes.map(async rec => {
      // only recipe with any relations
      const rec_object = {
        name: rec["name"],
        cleanName: rec["cleanName"],
        mealTags: Array.from(rec["mealTags"] || []),
        cuisine: (rec["cuisines"] || [null])[0],
        durationSecond: rec["totalTimeInSeconds"],
        durationString: rec["totalTime"] || "placeholder",
        ingredientCount: rec["ingredients"].length,
        ingredientLine: rec["ingredientLines"].join("\n"),
        ingredientLineCount: rec["ingredientLines"].length,
        numberOfServings: rec["numberOfServings"],
        instruction: rec["instructions"].join("\n"),
        imageLink: rec["mainImage"],
        nutrientsPerServing: rec["nutrientsPerServing"],
        weightGram: rec["weightInGrams"],
      }

      /* NOTE: Show the records in the database
        
        docker exec -it postgres psql IFood postgres
        select * from "Recipe";
      */

      /* for(let index in rec["ingredients"]) {
        let ingre_name = rec["ingredients"][index]["name"];
        const ingredients = await fetch(
          'api/ingredient?' + new URLSearchParams(
            { name: ingre_name }
          )
        ).then(res => res.json());

        console.log(ingredients);
        count++
        console.log(count);

      } */

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
      console.log("------- Response -------");
      console.log(ingredients);

      rec_object["ingredients"] = {
        "connect": ingredients
      }
      
      console.log(rec_object);
      // create the recipe object in db
      const res = await fetch("api/recipe/create", {
        body: JSON.stringify(rec_object),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      

      count++;
      console.log(count)
    }));

  }

  const createIngredientsFromJson = async (event) => {
    await Promise.all(ingredients.map(async ingre_name => {
      // only recipe with any relations
      const ingredient_object = {
        name: ingre_name,
      }

      /* NOTE: Show the records in the database
      
        https://stackoverflow.com/questions/2596670/how-do-you-find-the-row-count-for-all-your-tables-in-postgres

        docker exec -it postgres psql IFood postgres
        select * from "Ingredient";
      */
      const res = await fetch("api/ingredient/create", {
        body: JSON.stringify(ingredient_object),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
    }));
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
            Ingredients
          </h2>
          <button
            onClick={ createIngredientsFromJson }
            className="inline-block px-5 py-3 text-sm font-medium text-accent bg-primary rounded-lg"
            disabled={ true }
          >
                Add Ingredients from file
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
          >
                Read Json File and Add recipe
          </button>

          <DeleteRecipe />
        </div>

      </div>

      <ScrollTop />

      <Footer />
    </div>
  );
}

export function getServerSideProps() {
  const DIR_PATH = 'lib/data';

  /* 
  // uncomment: generate ingredients by reading json file
  const filename_ingredients = 'all_ingredients.json';
  let ingredients = JSON.parse(
    fs.readFileSync(path.resolve(DIR_PATH, filename_ingredients), {encoding: "utf8"})
  ); */

  // ingredients = ingredients.slice(100, 101);

  // Read json files and put recipe objects
  const filename = 'all_recipes.json';
  let recipes = JSON.parse(
    fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"})
  );
  // recipes = recipes.slice(4, 5);
  // console.log(recipes);

  return {
    props: { 
      recipes: recipes,
      // ingredients: ingredients
    }
  }
}

export default RecipesResult;