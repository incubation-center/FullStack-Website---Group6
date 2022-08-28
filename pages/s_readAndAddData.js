import fs from "fs";
import path from "path";

// import { useState } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import { DeleteRecipe } from "../components/recipe/deleteRecipe";


function RecipesResult({recipes}) {

  const createRecipeFromJson = async (event) => {
    /* console.log("------- Recipe objects -------");
    console.log(recipes); */

    await Promise.all(recipes.map(async rec => {
      // only recipe with any relations
      const rec_object = {
        name: rec["name"],
        cleanName: rec["cleanName"],
        mealTags: Array.from(rec["mealTags"]),
        cuisine: rec["cuisines"][0],
        durationSecond: rec["totalTimeInSeconds"],
        durationString: rec["totalTime"],
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

      console.log("------- Map | Recipe Object -------");
      console.log(rec_object);

      // body: JSON.stringify({
      //   rec_object
      // })

      const res = await fetch("api/recipe/create", {
        body: JSON.stringify(rec_object),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      console.log("------- Response -------");
      console.log(res);
    }));

  }

  
  

  return (
    <div
      className="flex flex-col justify-between"
      style={ { minHeight: "100vh" } }
    >
      <Navbar />

      {/* TODO: have a button to read data and add data to the DB */}

      <div className="flex-1 p-5 h-full justify-center md:flex dark:bg-neutral">
        <div className="m-0 sm:m-px md:my-5 md:ml-5 lg:m-5 md:order-last">
          {/* <IngredientList text="Find Recipes" /> */}

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
  // TODO count/join the ingredientLines, 
  // count the ingredients
  // join the instructions.

  // TODO: add m2m relation to ingredients
  const DIR_PATH = 'lib/data';
  const filename = 'all_recipes.json';
  let recipes = JSON.parse(
    fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"})
  );
  recipes = recipes.slice(4, 5);
  // console.log(recipes);

  return {
    props: { recipes: recipes }
  }
}

export default RecipesResult;