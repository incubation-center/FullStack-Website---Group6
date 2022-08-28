// node scripts/suggestic/read_local_json.js
import fs from 'fs';
import path from "path";
import {fileURLToPath} from 'url';


const DIR_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)), 
  "json_data"
);


async function writeJson(content, filename) {
  fs.writeFile(path.resolve(DIR_PATH, filename), JSON.stringify(content), function(err) {
    if (err) throw err;
    console.log('complete');
    }
  );
}



function getAllCommonIngredients() {
  const filename = 'final/all_recipes.json';
  const ingredient_set = new Set();

  const content = fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"});
  let all_recipes = JSON.parse(content);

  all_recipes.map(recipe => {
    recipe["ingredients"].map(ingre => {
      ingredient_set.add(ingre["name"]);
    })
  });

  writeJson(Array.from(ingredient_set).sort(), 'final/all_ingredients.json');
}

// getAllCommonIngredients();


function sanitizeDuplicateIngredient() {
  const duplicates_filename = "unsanitized/all_redundant_ingredients.json";
  
  // read sync json
  const content = fs.readFileSync(path.resolve(DIR_PATH, duplicates_filename), {encoding: "utf8"});
  let duplicates = JSON.parse(content);

  const filename_all_ingredients = 'unsanitized/all_ingredients.json';
  let ingred_content_to_write = fs.readFileSync(path.resolve(DIR_PATH, filename_all_ingredients), {encoding: "utf8"});

  const filename_all_recipes = 'unsanitized/all_recipes.json';
  let recipe_content_to_write = fs.readFileSync(path.resolve(DIR_PATH, filename_all_recipes), {encoding: "utf8"});

  // loop all properties
  Object.keys(duplicates).map(correct_name => {
    // loop all array element in value
    duplicates[correct_name].map(incorrect => {
      // replace each string
      ingred_content_to_write = ingred_content_to_write.replace(new RegExp(incorrect, "g"), correct_name);

      recipe_content_to_write = recipe_content_to_write.replace(new RegExp(incorrect, "g"), correct_name);
    });
  });

  // get the replaced string and write to ingredients file
  writeJson(
    Array.from(new Set(JSON.parse(ingred_content_to_write))),
    'final/all_ingredients.json'
  );

  writeJson(
    JSON.parse(recipe_content_to_write),
    'final/all_recipes.json'
  );
  
}

/* Step 1: delete seemingly duplicate ingredient from all ingredients and all recipes */
// sanitizeDuplicateIngredient();


function sanitizeIngredientSingularity() {
  const singularity_filename = "unsanitized/all_singular_ingredient.json";
  
  // read sync json
  const content = fs.readFileSync(path.resolve(DIR_PATH, singularity_filename), {encoding: "utf8"});
  let singularity = JSON.parse(content);

  // use the already sanitized files
  const filename_all_ingredients = 'final/all_ingredients.json';
  let ingred_content_to_write = fs.readFileSync(path.resolve(DIR_PATH, filename_all_ingredients), {encoding: "utf8"});

  const filename_all_recipes = 'final/all_recipes.json';
  let recipe_content_to_write = fs.readFileSync(path.resolve(DIR_PATH, filename_all_recipes), {encoding: "utf8"});

  // loop all properties
  Object.keys(singularity).map(correct_name => {
    // loop all array element in value
    singularity[correct_name].map(incorrect => {
      // replace each string
      ingred_content_to_write = ingred_content_to_write.replace(new RegExp(incorrect, "g"), correct_name);

      recipe_content_to_write = recipe_content_to_write.replace(new RegExp(incorrect, "g"), correct_name);
    });
  });

  // get the replaced string and write to ingredients file
  writeJson(
    Array.from(new Set(JSON.parse(ingred_content_to_write))),
    'final/all_ingredients.json'
  );

  writeJson(
    JSON.parse(recipe_content_to_write),
    'final/all_recipes.json'
  );
  
}

/* Step 2: remove ingredients ending with `s` */
sanitizeIngredientSingularity()
