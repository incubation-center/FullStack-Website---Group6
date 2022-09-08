import React from 'react';

import Navbar from '../components/navbar';
import { CreateRecipe } from '../components/recipe/createRecipe';
import { DeleteRecipe } from '../components/recipe/deleteRecipe';
import { CreateRecipeCategory } from '../components/recipeCategory/createRecipeCategory';
import { DeleteRecipeCategory } from '../components/recipeCategory/deleteRecipeCategory';
import { prisma } from '../lib/prisma';


const stringifyRelatedObjectNames  = (objects, attr, key = "name") => {
  return objects.map(obj => obj[attr][key]).toString();
}

const stringifyImplicitRelatedObjectNames  = (objects, attr = "name") => {
  return objects.map(obj => obj[attr]).toString();
}



export default function SRecipes ({max_nutrients}) {

  return (
    <div>
      <Navbar />

      {/* <div className="bg-white rounded-md p-12 shadow-md flex justify-evenly">

        <div>
          <h2 className="card-title">Actions | Recipe Category</h2>

          <div className="bg-white rounded-md p-12 shadow-md flex justify-around">


            <CreateRecipeCategory />   

            <DeleteRecipeCategory />   
          </div>

          
        </div>
        
      </div> */}

      {/* <h2 className="card-title">All Categories</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
            <tbody>
              {
                allRecipeCategories.map(category => (
                  <tr key={category.id}>
                    {Object.keys(category).map((info, i) => (
                      <td key={i}>{category[info]}</td>
                    ) )}
                  </tr>
                ))
              }
            </tbody>
        </table>
      </div> */}

      {/* <h2 className="card-title">All Recipes</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
            <thead>
              {
                !!allRecipes.length && (
                  <tr>
                    {Object.keys(allRecipes[0]).map(key => (
                      <td key={key}>{key}</td>
                    ))}
                  </tr>
                )
              }
            </thead>
            <tbody>
              {
                allRecipes.map(recipe => (
                  <tr key={recipe.id}>
                    {Object.keys(recipe).map((info, i) => {
                      if (info === "ingredients" || info === "categories" || info === "cuisines") return (
                        <td key={i}>
                          {stringifyImplicitRelatedObjectNames(recipe[info])}
                        </td>
                      ); else if (info !== "nutrientsPerServing") return (
                        <td key={i}>{recipe[info]}</td>
                      ); else return (
                        // <td key={i}>{stringifyRelatedObjectNames(recipe[info], "recipeCategory")}</td>
                        <td key={i}>{JSON.stringify(recipe[info])}</td>
                      )
                    } )}
                  </tr>
                ))
              }
            </tbody>
        </table>
      </div> */}

    </div>
  )
}

export async function getStaticProps() {
  
  const max_nutrients = [];
  /* await prisma.recipe.aggregate({
    _max: {
      nutrientsPerServing: {
        protient: true
      }
    }
  }); */


  return {
    props: { 
      max_nutrients: JSON.parse(JSON.stringify(max_nutrients)),
    },
  }
}

/* 1. get max nutrients 
  - static for now
2. get m */