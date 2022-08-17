// node scripts/suggestic/make_request.js
import fs from 'fs';
import path from "path";
import {fileURLToPath} from 'url';

import fetch from 'node-fetch';


const SUGGESTIC_API = "https://production.suggestic.com/graphql";
const PER_PAGE = 100; // maximum is 100


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
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dir_path = path.join(__dirname, "json_data");

  fs.writeFile(path.resolve(dir_path, filename), JSON.stringify(content), function(err) {
    if (err) throw err;
    console.log('complete');
    }
  );
}

async function getAllData(total=1) {
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

getAllData(100)
