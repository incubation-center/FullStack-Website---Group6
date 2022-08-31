import React from 'react';

import Navbar from '../components/navbar';
import { DeleteIngredient } from '../components/ingredient/deleteIngredient';
import { prisma } from '../lib/prisma';


const stringifyImplicitRelatedObjectNames  = (objects, attr = "name") => {
  return objects.map(obj => obj[attr]).toString();
}

export default function SIngredients ({allIngredients}) {

  return (
    <div>
      <Navbar />

      <div>
        <h2 className="card-title">Actions | Ingredient</h2>

        <div className="bg-white rounded-md p-12 shadow-md flex justify-around">
          <DeleteIngredient />   
        </div>
        
      </div>

      <h2 className="card-title">All Ingredients</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
            <thead>
              {
                !!allIngredients.length && (
                  <tr>
                    {Object.keys(allIngredients[0]).map(key => (
                      <td key={key}>{key}</td>
                    ))}
                  </tr>
                )
              }
            </thead>
            <tbody>
              {
                allIngredients.map(ingredient => (
                  <tr key={ingredient.id}>
                    {Object.keys(ingredient).map((info, i) => {

                      if (info === "categories") return (
                        <td key={i}>
                          {stringifyImplicitRelatedObjectNames(ingredient[info])}
                        </td>
                      ); else return (
                        // <td key={i}>{stringifyRelatedObjectNames(ingredient[info], "ingredientCategory")}</td>
                        <td key={i}>{JSON.stringify(ingredient[info])}</td>
                      )
                    } )}
                  </tr>
                ))
              }
            </tbody>
        </table>
      </div>

    </div>
  )
}

export async function getStaticProps() {
  const allIngredients = await prisma.ingredient.findMany({
    include: {
      categories: {
        select: {
          name: true
        }
      },
    }
  });
//   const allRecipeCategories = await prisma.recipeCategory.findMany();

  console.log(allIngredients)
  return {
    props: { 
      allIngredients: JSON.parse(JSON.stringify(allIngredients)),
    //   allRecipeCategories: JSON.parse(JSON.stringify(allRecipeCategories)),
    },
  }
}
