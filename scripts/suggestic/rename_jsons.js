// node scripts/suggestic/rename_jsons.js

import fs from 'fs';
import path from "path";
import {fileURLToPath} from 'url';


const DIR_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)), 
  "json_data/v2"
);

const CUISINES = [
  'American',      'Asian',
  'Chinese',       'Greek',
  'Italian',       'Japanese',
  'Kid-Friendly',  'Korean',
  'Mediterranean', 'Mexican',
  'Spanish',       'World',
]

async function writeJson(content, filename) {
  fs.writeFile(path.resolve(DIR_PATH, filename), JSON.stringify(content), function(err) {
    if (err) throw err;
    console.log('complete');
    }
  );
}


function rename_json_each_cuisines () {
  /* remove all integers_ from file name */
  var regex = RegExp(/^[\d]{3}_/, 'g')

  for (let cuisine_i in CUISINES) { 
    let filepath = path.resolve(
      DIR_PATH, CUISINES[cuisine_i]
    );
    var files = fs.readdirSync(filepath);
    
    // renaming files
    files.map((file) => {
      var renamed_file = file.replace(regex, '');
      fs.renameSync(
        path.resolve(filepath, file), 
        path.resolve(filepath, renamed_file)
      );
    });
  }
}

// rename_json_each_cuisines()


function get_unique_recipes () {
  /* const array =
    [
      { "name": "Joe", "age": 17 },
      { "name": "Bob", "age": 17 },
      { "name": "Carl", "age": 35 }
    ]

  const key = 'age';

  const arrayUniqueByKey = [...new Map(array.map(item =>
    [item[key], item])).values()]; 
  */

  const filename = 'recipe_name.json'

  let unique_recipes = new Set();
  for (let cuisine_i in CUISINES) {
    let filepath = path.resolve(
      DIR_PATH, CUISINES[cuisine_i]
    );
    const content = fs.readFileSync(path.resolve(filepath, filename), {encoding: "utf8"});
    let all_recipes = JSON.parse(content);

    Object.keys(all_recipes).map(recipe_key => {
      unique_recipes.add(all_recipes[recipe_key]);
    })
  }

  writeJson(Array.from(unique_recipes).sort(), 'all_recipes/unique_recipe_names.json');

}
/* get all the unique recipe by names */
// get_unique_recipes()

function split_to_50 () {
  /* split all the 1 thousand recipe to 50 */
  let filename = "all_recipes/unique_recipe_names.json";
  
  const content = fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"});
  let all_recipes = JSON.parse(content);

  for (let i=0; i<1000/50; i++) {
    var start_index = i*50;
    var end_index = i*50 + 50;

    var sliced = all_recipes.slice(start_index, end_index);

    var write_filename = `all_recipes/each50recipes/r${i}_recipes.json`
    fs.openSync(
      path.resolve(DIR_PATH, write_filename),
      'w'
    );

    writeJson(Array.from(sliced).sort(), write_filename);
  }
}

// split_to_50()


function find_duplicates() {

  let non_array = [];
  let non_index = [];

  function checkIfNone(arrayProps, name, index) {
    if (!arrayProps || arrayProps.length == 0 || arrayProps == null) return false;
    if (Array.isArray(arrayProps)) {
      if (arrayProps.filter(Boolean).length < 1) {
        non_array.push(name);
        non_index(index);
        return false;
      } 
      else return true;
    }
    return true
  }

  let unique_recipe = new Set();
  let duplicated_recipe = [];
  let no_instruction = [];
  let no_image = [];
  let no_cuisines = [];
  let no_mealTag = [];

  let i = 0;

  let ingredient_object = {};

  // for (let i=0; i<20; i++) {
    // let filename = `all_recipes/raw50recipes/r${i}_recipes.json`;
  let filename = `all_recipes/raw/non_cuisine_recipes.json`;
  // let filename = `all_recipes/raw/all_recipes.json`;
  const content = fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"});
  let recipes = JSON.parse(content);

  let new_recipes = [];

  recipes.map(recipe => {
    let new_rec = recipe;
    /* recipe.ingredients.map(ingredient => {
      if (ingredient_object[ingredient.name] === undefined) ingredient_object[ingredient.name] = 1;
      else ingredient_object[ingredient.name] += 1;
      
    }) */

    

    // check for duplicate recipe 
    if (unique_recipe.has(recipe.name)) duplicated_recipe.push(recipe.name);
    unique_recipe.add(recipe.name);

    // check for recipe without instructions
    if (!checkIfNone(recipe.instructions, recipe.name, i)) no_instruction.push(recipe.name);
    // check for recipe without image
    if (!checkIfNone(recipe.mainImage, recipe.name, i)) no_image.push(recipe.name);
    // check for recipe without meal tags
    if (!checkIfNone(recipe.cuisines, recipe.name, i)) {
      no_cuisines.push(recipe.name);
      new_rec.cuisines = ["World"];
    }
    // check for recipe without meal tags
    if (!checkIfNone(recipe.mealTags, recipe.name, i)) no_mealTag.push(recipe.name);

    i++;

    new_recipes.push(new_rec);
  });
  // }

  console.log(duplicated_recipe);
  console.log(no_instruction);
  console.log(no_image);
  console.log(no_cuisines);
  console.log(no_mealTag);

  console.log(non_array);
  console.log(non_index);
  console.log(i);

  /* // sorting by the recipe count of each ingredient
  const sorted_ingre_count = Object.entries(ingredient_object)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  writeJson(
    sorted_ingre_count, 
    `all_recipes/raw/ingredients_count.json`
  );

  // sorting by the recipe count of each ingredient
  const sorted_name = Object.entries(ingredient_object)
    .sort(([a,],[b,]) => (a > b) ? 1 : (b > a) ? -1 : 0)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  writeJson(
    sorted_name, 
    `all_recipes/raw/ingredients_count_name.json`
  ); */

  
  /* // write the replaced-cuisine recipe
  writeJson(
    new_recipes, 
    `all_recipes/raw/all_recipes.json`
  ); */
}

// find_duplicates()


function combine_recipes() {

  let all_recipes = [];

  for (let i=0; i<20; i++) {
    let filename = `all_recipes/raw50recipes/r${i}_recipes.json`;
    const content = fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"});
    let recipes = JSON.parse(content);

    all_recipes.push(...recipes);
  }

  let filename = "all_recipes/raw/all_recipes.json"

  writeJson(
    all_recipes.sort(
      (a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
    ),
    filename
  );
}

// combine_recipes()


function find_plural_postfix() {
  /* find string that ends with s, es ealso */
  let filename = `all_recipes/raw/ingredients_count_name.json`;
  const content = fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"});
  let ingredients = JSON.parse(content);

  let redundant_ingredients = {};

  Object.keys(ingredients).map(ingredient => {
    let matched = ingredient.match(/^(.*)(s|es)$/)
    if (matched) {

      if (ingredients[matched[1]]) {
        redundant_ingredients[matched[1]] = [ingredient];
        console.log(ingredient, matched[1]);
      }

      /* let removed_postfix = ingredient.replace(`${matched[0]}$`, '');
      console.log(ingredient, removed_postfix)
      if (ingredient[removed_postfix]) {
        console.log(ingredient, removed_postfix)
      } */
    }
  });

  writeJson(
    redundant_ingredients,
    "all_recipes/raw/redundant_ingredients.json"
  );

}

// find_plural_postfix()


/* replace the redundant ingredients */

function sanitizeIngredientSingularity() {
  const singularity_filename = "all_recipes/raw/redundant_ingredients.json";
  
  // read sync json
  const content = fs.readFileSync(path.resolve(DIR_PATH, singularity_filename), {encoding: "utf8"});
  let singularity = JSON.parse(content);

  // use the already sanitized files
  const filename_all_ingredients = 'all_recipes/raw/ingredients_count_name.json';
  let ingred_content_to_write = fs.readFileSync(
    path.resolve(DIR_PATH, filename_all_ingredients), 
    {encoding: "utf8"}
  );

  const filename_all_recipes = 'all_recipes/raw/all_recipes.json';
  let recipe_content_to_write = fs.readFileSync(
    path.resolve(DIR_PATH, filename_all_recipes), 
    {encoding: "utf8"}
  );

  // loop all properties
  Object.keys(singularity).map(correct_name => {
    // loop all array element in value
    singularity[correct_name].map(incorrect => {

      console.log(correct_name, incorrect)

      let incorrect_string = `${incorrect}"`
      // replace each string
      ingred_content_to_write = ingred_content_to_write.replace(
        new RegExp(incorrect, "g"), correct_name
      );

      // console.log(ingred_content_to_write)

      recipe_content_to_write = recipe_content_to_write.replace(
        new RegExp(incorrect, "g"), `${correct_name}`
      );
    });
  });

  // get the replaced string and write to ingredients file
  writeJson(
    JSON.parse(ingred_content_to_write),
    'all_recipes/all_good/sanitized_ingredients.json'
  );

  writeJson(
    JSON.parse(recipe_content_to_write),
    'all_recipes/all_good/all_recipes.json'
  );
  
}

// sanitizeIngredientSingularity()


/* get the ingredient counts */
function get_ingredient_count() {
  let ingredient_object = {};
  
  let filename = `all_recipes/all_good/all_recipes.json`;
  const content = fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"});
  let recipes = JSON.parse(content);

  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      if (ingredient_object[ingredient.name] === undefined) ingredient_object[ingredient.name] = 1;
      else ingredient_object[ingredient.name] += 1;
    })
  });

  // sorting by the recipe count of each ingredient
  const sorted_ingre_count = Object.entries(ingredient_object)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  writeJson(
    sorted_ingre_count, 
    `all_recipes/all_good/ingredients_count.json`
  );

  // sorting by the recipe count of each ingredient
  const sorted_name = Object.entries(ingredient_object)
    .sort(([a,],[b,]) => (a > b) ? 1 : (b > a) ? -1 : 0)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  writeJson(
    sorted_name, 
    `all_recipes/all_good/ingredients_count_name.json`
  );
}

// get_ingredient_count()

function ingredient_dict_to_array() {
  let filename = `all_recipes/all_good/ingredients_count.json`;
  const content = fs.readFileSync(path.resolve(DIR_PATH, filename), {encoding: "utf8"});
  let ingredients = JSON.parse(content);

  let ingredient_array = Object.keys(ingredients);

  writeJson(
    Array.from(ingredient_array), 
    `all_recipes/all_good/all_ingredients.json`
  );
}
ingredient_dict_to_array();

