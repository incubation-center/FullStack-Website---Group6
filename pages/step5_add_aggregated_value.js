import { useState } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import { prisma } from "../lib/prisma";


function GetAggregated({dbMax}) {

  const getAggregate = async (event) => {
    
    const max_aggregate = await fetch("api/aggregate/max", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());

    // create max properties of recipe
    /* const res = await fetch("api/maxRecipeProperty/create", {
      body: JSON.stringify(
        max_aggregate.data._max
      ),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }); */

  }


  return (
    <div
      className="flex flex-col justify-between"
      style={ { minHeight: "100vh" } }
    >
      <Navbar />

      {/* Max properties of recipes */}
      <div className="flex-1 p-5 h-full justify-center md:flex dark:bg-neutral">
        <div className="m-0 sm:m-px md:my-5 md:ml-5 lg:m-5 md:order-last">
          <h2 className="text-xl lg:text-2xl dark:text-accent font-bold m-3">
            Aggregated
          </h2>
          <button
            onClick={ getAggregate }
            className="inline-block px-5 py-3 text-sm font-medium text-accent bg-primary rounded-lg"
            disabled={ true }
          >
                maxRecipeProperty
          </button>

        </div>
        
      </div>

      {/* Count all recipes of each cuisine */}
      <div className="overflow-x-auto">
        <h2 className="card-title">Count Recipe of All Cuisines</h2>
        <table className="table w-full">
            <tbody>
              <tr>
                {
                  Object.keys(dbMax[0]).map((key, ind) => (
                    <td key={ind}>{ key }</td>
                  ))
                }
              </tr>
                  
              {dbMax.map((max_props, i) => {
                  return (
                    <tr key={i}>
                      {
                        Object.keys(max_props).map((max_p, ind) => <td key={ind}> {max_props[max_p]} </td>)
                      }
                    </tr>
                  )
                }
              )}
            </tbody>
        </table>
      </div>

      <ScrollTop />

      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {  

  const dbMax = await prisma.maxRecipeProperty.findMany();

  return {
    props: {
      dbMax: dbMax
    }
  }
}


export default GetAggregated;
