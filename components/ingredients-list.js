import Link from "next/link";

function IngredientsList ( { text } ) 
{
  return (
    <div className="container md:w-96 bg-primary h-full">
      <div className="card md:w-96 bg-accent shadow-md h-full">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Ingredients</h2>
          <div className="form-control grow">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="label-text m-5">Apple</span>
            </label>
          </div>
          <div className="card-actions">
            <Link href="/recipes-result">
              <button className="btn btn-primary text-accent">{text}</button>
            </Link>
          </div>
          <div className="justify-end">❌ Clear all</div>
        </div>
      </div>
    </div>
  );
}

export default IngredientsList;
