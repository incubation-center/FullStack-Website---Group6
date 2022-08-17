// node scripts/suggestic/make_request.js
import fs from 'fs';
import path from "path";
import {fileURLToPath} from 'url';

import fetch from 'node-fetch';


const SUGGESTIC_API = "https://production.suggestic.com/graphql";
const PER_PAGE = 100; // maximum is 100
const DIR_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)), 
  "json_data"
);


const recipeSearchQueryString = (params_string) => `{
  recipeSearch(${params_string} cuisines: "Asian" first: ${PER_PAGE}) {
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
async function getData(params) {
  const query_string = recipeSearchQueryString(`${params}`);
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
    let response = await getData(`after: "${endCusor}"`);
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

getIngredientCount("10000_ingredient_unique_name.json", 3);
// getIngredientCount("test_2.json", 6);
