import { useRouter } from "next/router";


export const CreateRecipeCategory = () => {
  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);

  const createRecipeCategory = async (event) => {
    event.preventDefault();

    const target = event.target;

    const res = await fetch("/api/recipeCategory/create", {
      body: JSON.stringify({
        name: target.name.value,
        description: target.description.value
      }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    
    refreshData();  
  }

  return (

    <form className="form-control w-full max-w-xs" onSubmit={createRecipeCategory}>
      <label htmlFor="name" className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" id="name" name="name" defaultValue="Meat" className="input input-bordered w-full max-w-xs" required/>

      <label htmlFor="description" className="label">
        <span className="label-text">Description</span>
      </label>
      <input type="text" id="description" name="description" className="input input-bordered w-full max-w-xs" 
        defaultValue="A great source of protein, iron, zinc and B12" required/>

      <button 
        className="my-4 btn btn-square btn-outline bg-purple-400 p-2 rounded-md text-white font-bold border-2 border-purple-500 outline-none cursor-pointer" 
        type="submit">Add</button> 
    </form>
  );
};
