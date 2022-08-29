// node scripts/suggestic/make_request.js
import fs from 'fs';
import path from "path";
import {fileURLToPath} from 'url';

import fetch from 'node-fetch';


const SUGGESTIC_API = "https://production.suggestic.com/graphql";
const PER_PAGE = 1; // maximum is 100
const DIR_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)), 
  "json_data"
);


const recipeSearchQueryString = (params_string) => `{
  recipeSearch(${params_string} first: ${PER_PAGE}) {
    pageInfo {
      endCursor
      hasNextPage
    }

    edges {
      node {
        name
        ingredients {
          name
        }
      }
    }
  }
}`

// function making request to the GraphQL API
async function getData(params, query_func=recipeSearchQueryString) {
  const query_string = query_func(`${params}`);
  const data = JSON.stringify({
    query: query_string,
  });

  const response = await fetch(
    SUGGESTIC_API,
    {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        Authorization: 'Token f8871d20ca0de98760a97a0e61fb62f9845653a7',
        'User-Agent': 'Node',
      },
    }
  );

  return response.json()
}

async function writeJson(content, filename) {
  fs.writeFile(path.resolve(DIR_PATH, filename), JSON.stringify(content), function(err) {
    if (err) throw err;
    console.log('complete');
    }
  );
}

async function getRecipewithIngredientData(total=1) {
  let endCusor = "";
  let all_recipes = [];
  let all_recipe_name = {};
  let all_ingredient_name = {};
  let unique_ingredient_name = new Set();

  // loop reverse-paginating
  for (let i = 0; i < total; i++) {
    let response = await getData(`cuisines: "Asian" after: "${endCusor}"`);
    let res_recipe_search = response.data["recipeSearch"];

    let paging = res_recipe_search["pageInfo"]; // get the pagination info

    let recipes = res_recipe_search["edges"]; // get all the recipe records
    all_recipes = all_recipes.concat(recipes) // get all the recipes object

    recipes.map((rec, number) => {
      let n = i * PER_PAGE + number + 1; // the numeral order of the recipe names
      let recipe = rec["node"]

      all_recipe_name[n] = recipe["name"]; // append the recipe names to the all-recipe object

      recipe["ingredients"].map((ing, num2) => {
        all_ingredient_name[`${n}-${num2}`] = ing["name"];
        unique_ingredient_name.add(ing["name"]);
      });
    });

    // the pagination ends before the total number of requests reached
    if (!paging["hasNextPage"]) {
      console.log("------ End of pagination. ------");
      break
    }
    // update the end-cursor to go to next page
    endCusor = paging["endCursor"];

  }
  
  writeJson(all_recipes, `${total * PER_PAGE}_recipes.json`);
  writeJson(all_recipe_name, `${total * PER_PAGE}_recipe_name.json`);
  writeJson(all_ingredient_name, `${total * PER_PAGE}_ingredient_name.json`);

  writeJson(Array.from(unique_ingredient_name), `${total * PER_PAGE}_ingredient_unique_name.json`);
}

// get recipe and its unique ingredients
// getRecipewithIngredientData(100)

async function getIngredientCount(filename, upto=1) {

  async function requestIngredientCount(upto, ingre_name) {
    let endCusor = "";
    let recipes_count = 0;

    // loop reverse-paginating
    for (let i = 0; i < upto; i++) {
      let response = await getData(`filter: {must: [{ ingredients: "${ingre_name}" }]}  after: "${endCusor}"`);

      let res_ingre_count = response.data["recipeSearch"];

      // no response was found
      if (!res_ingre_count) break;

      let paging = res_ingre_count["pageInfo"];

      let all_recipes = res_ingre_count["edges"];
      
      
      recipes_count += all_recipes.length;

      // the pagination ends before the total number of requests reached
      if (!paging["hasNextPage"]) {
        console.log("------ End of pagination. ------");
        break
      }
      // update the end-cursor to go to next page
      endCusor = paging["endCursor"];

    }
    // console.log(recipes_count);
    return recipes_count;
  }
  
  let ingredient_count = {};

  // reading the JSON file and parse the ingredients array

  /* fs.readFile(path.resolve(DIR_PATH, filename), (err, data) => {
    let unique_ingre = JSON.parse(data);
    unique_ingre.map(async ingre => {
      var count = await requestIngredientCount(upto, ingre);
      ingredient_count[ingre] = count;
      // console.log(ingredient_count);
    });
  }) */
  const content = fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"});
  let unique_ingre = JSON.parse(content);

  // console.log(content);
  let map = await Promise.all(unique_ingre.map(async ingre => {
    var count = await requestIngredientCount(upto, ingre);
    ingredient_count[ingre] = count;

    await new Promise(resolve => setTimeout(resolve, 500));
  }));

  if (!map) console.log("Something went wrong")

  // sorting by the recipe count of each ingredient
  const sorted_ingre_count = Object.entries(ingredient_count)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  writeJson(sorted_ingre_count, `count_ingredient_${upto * PER_PAGE}_recipes.json`);
  
}

// uncomment to read the provided JSON name and write a new JSON file
// getIngredientCount("testtest.json", 3);
// getIngredientCount("test_2.json", 6);


async function sortChosenIngredient(filename="chosen_ingredient.json") {
  // let filter_ingredients = "";
  const content = fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"});
  writeJson(
    JSON.parse(content).sort(), 
    `sorted_chosen_ingredients.json`)
  ;
}

// sortChosenIngredient();

async function generateIngredientFilterString(filename="chosen_ingredient.json") {
  let filter_ingredients = "";
  const content = fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"});
  let unique_ingre = JSON.parse(content);

  for (let i=0; i < unique_ingre.length; i++) {
    filter_ingredients += `, {ingredients: "${unique_ingre[i]}"}`
  }

  filter_ingredients = `[${filter_ingredients.slice(2)}]`

  // console.log(filter_ingredients)

  return filter_ingredients
}

// does not write JSON, only read and return string
// generateIngredientFilterString("required_ingredient.json");



/* i could make 3~400 requests at a time and save the endCursor manually */
async function getFinalRecipeByIngredients(upto=2) {
  // const ingredient_json_file = "required_ingredient.json";
  const ingredient_json_file = "unsanitized/all_ingredients.json";
  
  let ingredients_filter = await generateIngredientFilterString(ingredient_json_file);

  const chosen_ingre_file = "chosen_ingredient.json";
  const unique_ingre_content = fs.readFileSync(path.resolve(DIR_PATH, chosen_ingre_file), {encoding: "utf8"});
  let unique_ingre = JSON.parse(unique_ingre_content);

  console.log(unique_ingre);
  console.log(unique_ingre.length);

  let endCusor = "";
  // let all_recipes = [];
  let all_recipe_name = {};
  let unique_ingredient_name = new Set();

  let ingre_not_in_data = {};
  for (let i = 0; i < upto; i++) {

    /* this request has should filter which we should be getting the recipes
      in the ingredients list
    */
    let response = await getData(
      `hasInstructions:true hasImage: true filter: { should: ${ingredients_filter} } after: "${endCusor}"`
    );

    // console.log(response)

    let res_recipe_search = response.data["recipeSearch"];

    let paging = res_recipe_search["pageInfo"]; // get the pagination info

    
    
    
    let recipes = res_recipe_search["edges"]; // get all the recipe records
    // all_recipes = all_recipes.concat(recipes) // get all the recipes object

    recipes.map((rec, number) => {
      let n = i * PER_PAGE + number + 1; // the numeral order of the recipe names
      let recipe = rec["node"]

      

      let this_recipe_ingreds = []; // reset
      this_recipe_ingreds = recipe["ingredients"].map((ing, num2) => ing["name"]);

      // console.log(this_recipe_ingreds)

      let count_not_in = 0; // reset
      let ingred_not_in = []; // reset ingredient not in the list

      let subset_of_unique_list = this_recipe_ingreds.every(
        function(val) {
          let is_subset = unique_ingre.indexOf(val) >= 0;

          if (!is_subset) {

            // see the frequency
            if (val in ingre_not_in_data) {
              ingre_not_in_data[val] += 1;
            } else {
              ingre_not_in_data[val] = 1;
            }

            ingred_not_in.push(val);
            count_not_in++;
          }

          return is_subset;
        }
      );

      console.log(subset_of_unique_list)  
      console.log(ingred_not_in);
      console.log(count_not_in);

      if (subset_of_unique_list == true) {
        all_recipe_name[n] = recipe["name"]; // append the recipe names to the all-recipe object
        // unique_ingredient_name.add(ing["name"]);
        this_recipe_ingreds.forEach(ing => unique_ingredient_name.add(ing));
      }

    });


    // the pagination ends before the total number of requests reached
    if (!paging["hasNextPage"]) {
      console.log("------ End of pagination. ------");
      break
    }
    // update the end-cursor to go to next page
    endCusor = paging["endCursor"];
  }

  let count_name = all_recipe_name.length;
    
  // writeJson(all_recipes, `final/${count_name * PER_PAGE}_recipes.json`);
  writeJson(all_recipe_name, 
    `final/${count_name * PER_PAGE}_recipe_name.json`
  );

  writeJson(Array.from(unique_ingredient_name), 
    `final/${count_name * PER_PAGE}_ingredient_unique_name.json`)
  ;

  const sorted_ingre_count = Object.entries(ingre_not_in_data)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  writeJson(sorted_ingre_count, `final/${upto * PER_PAGE}_frequency_offset_ingredients.json`);

  console.log(`End cursor ${endCusor}`);
}

// getFinalRecipeByIngredients(50);

// =============================== Get the recipe and its properties =========================================

const recipePropertiesQueryString = (recipe_name) => `{
  recipeSearch(query: "${recipe_name}") {
    edges {
      node {
        name
        cleanName
        text
        mealTags
        cuisines
        courses
        rating
        totalTime
        totalTimeInSeconds
        favoritesCount
        numberOfServings
        weightInGrams
        nutrientsPerServing {
          calories
          protein
          carbs
          fiber
          fat
          sugar
          cholesterol
        }
        ingredientsCount
        ingredientLines
        ingredients {
          name
        }
        instructions
        mainImage
      }
    }
  }
}`

async function getRecipeProperties() {
  const recipes_filename = "final/final_recipe_name.json"
  const content = fs.readFileSync(path.resolve(DIR_PATH, recipes_filename), {encoding: "utf8"});
  let recipes = JSON.parse(content);

  let recipe_response = []
  // loop every key to get the value (recipe name)
  let forEachRecipe = await Promise.all(Object.keys(recipes).map(async key => {
    let response = await getData(recipes[key], recipePropertiesQueryString)
    // console.log(response.data["recipeSearch"]["edges"][0]["node"]);
    recipe_response.push(response.data["recipeSearch"]["edges"][0]["node"]);
  }));
  if (!forEachRecipe) console.log("Something went wrong");

  console.log(recipe_response.length)
  writeJson(Array.from(recipe_response), `all_recipes.json`);

}

// request all properties of all recipes
// getRecipeProperties()