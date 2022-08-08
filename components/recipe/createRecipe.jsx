import { useRouter } from "next/router";


const makeRecipeCategoryPivot = (category_id) => {
  return {
    assignedBy: "Simba",
    recipeCategory: {
      connect: {
        id: parseInt(category_id),
      }
    }
  }
}


export const CreateRecipe = ({categories}) => {
  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);

  const createRecipe = async (event) => {
    event.preventDefault();

    const target = event.target;

    let cates = target.category;
    cates = cates.length ? cates : [cates];

    let recipe_categories = []

    for (let i = 0; i < cates.length; i++) {
      
      if (cates[i].checked === true) {
        recipe_categories.push(makeRecipeCategoryPivot(cates[i].id))
      }
    }

    const res = await fetch("/api/recipe/create", {
      body: JSON.stringify({
        name: target.name.value,
        description: target.description.value,
        categories: recipe_categories,
      }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    
    refreshData();
  
  }

  return (

    <form action="/api/recipe/create" method="post" className="form-control w-full max-w-xs" onSubmit={createRecipe}>
      <label htmlFor="name" className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" id="name" name="name" defaultValue="Fried Egg" className="input input-bordered w-full max-w-xs" required/>

      <label htmlFor="description" className="label">
        <span className="label-text">Description</span>
      </label>
      <input type="text" id="description" name="description" defaultValue="Our simple egg on pan breakfast" className="input input-bordered w-full max-w-xs" required/>


      {
        categories.map(category => (
          <label className="label cursor-pointer" key={category.id}>
            <span className="label-text">{category.name}</span>
            <input type="checkbox" defaultChecked="checked" id={category.id} name="category" value={category.name} className="checkbox checkbox-primary" />
          </label>
        ))
      }

      <button 
        className="my-4 btn btn-square btn-outline bg-purple-400 p-2 rounded-md text-white font-bold border-2 border-purple-500 outline-none cursor-pointer" 
        type="submit">Add</button> 

    </form>
  );
};
