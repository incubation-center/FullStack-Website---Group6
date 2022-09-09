// import fs from "fs";
import path from "path";

import * as csv from "fast-csv";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import { prisma } from '../lib/prisma';


const stringifyImplicitRelatedObjectNames  = (objects, attr = "name") => {
  return objects.map(obj => obj[attr]).toString();
}

function RecipesResult({ingre_cates, categories, dbIngredientCategory}) {

  const createIngredientCategoryFromCsv = async (event) => {
    let ing_categories = {};
    categories.map(cate => {
      ing_categories[cate] = [];
    });

    // hard copy the object to store the ingredient ids of each type
    let ingre_each_cate_ids = JSON.parse(JSON.stringify(ing_categories));

    ingre_cates.map(cate => {
      // Excluding the image-link rows
      if (cate["Categories"]) {
        categories.map(category => {
          if (cate[category] !== "") {
            ing_categories[category].push(cate[category]);
          }
        });
      };
    });

    await Promise.all(
      Object.keys(ing_categories).map(async categ => {
        // console.log(categ)
        let ingre_query = [];
        ing_categories[categ].map(ingre_name => ingre_query.push({"name": ingre_name}));

        const ingredients = await fetch("api/ingredient/all", {
          body: JSON.stringify({
            "where": {
              "OR": ingre_query
            },
            "select": {
              "id": true
            }
          }),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }).then(res => res.json());

        const ingredient_category_object = {
          "name": categ,
          "ingredients": {
            "connect": ingredients
          }
        }
        //  create the recipe object in db
        const res = await fetch("api/ingredientCategory/create", {
          body: JSON.stringify(
            ingredient_category_object
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
          <h2 className="text-xl lg:text-2xl dark:text-accent font-bold m-3">
            Ingredient Categories
          </h2>
          <div className="items-center grid-flow-col">
            
            <p>{ categories }</p>
          </div>
          <button
            onClick={ createIngredientCategoryFromCsv }
            className="inline-block px-5 py-3 text-sm font-medium text-accent bg-primary rounded-lg"
            disabled={ true }
          >
                Add Ingredients from file
          </button>

          {/* <DeleteIngredient />    */}

        </div>
        
      </div>

      {/* Query ingredient category from db */}
      <h2 className="card-title">DB Ingredient Category</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
            <tbody>
              {
                dbIngredientCategory.map(category => (
                  <tr key={category.id}>
                    {Object.keys(category).map((info, i) => {
                      if (info === "ingredients") return (
                          <td key={i}>
                            {stringifyImplicitRelatedObjectNames(category[info])}
                          </td>
                        ); else return (
                          <td key={i}>{JSON.stringify(category[info])}</td>
                        )
                      } 
                    )}
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

export const getServerSideProps = async () => {
  const DIR_PATH = 'lib/data/category';
  
  // read csv
  const file_ingre_cate = 'ingredient_categories.csv';

  // use fast-csv to read and wrap in a promise to await 
  const ingre_cates = await new Promise((resolve, reject) => {
    const rows = [];

    csv.parseFile(
      path.resolve(DIR_PATH, file_ingre_cate),
      { headers: true }
    )
      .on("error", reject)
      .on("data", (row) => {
        // const obj = rowProcessor(row);
        if (row) rows.push(row);
      })
      .on("end", () => {
        resolve(rows);
      });
  });
  
  const dbIngredientCategory = await prisma.ingredientCategory.findMany({
    include: {
      ingredients: {
        select: {
          name: true
        }
      },
    }
  });
  
  return {
    props: { 
      ingre_cates: ingre_cates,
      categories: Object.keys(ingre_cates[0]).filter(c => !!c && c !== "Categories"),
      dbIngredientCategory: JSON.parse(JSON.stringify(dbIngredientCategory)),
    }
  }
}

export default RecipesResult;