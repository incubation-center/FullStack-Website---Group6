export default function IngredientsList() {
  return (
    <div className="container lg:w-96 bg-primary h-full">
      <div className="card lg:w-96 bg-base-100 shadow-md h-full">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Ingredients</h2>
          <p className="flex justify-end">❌ Clear all</p>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="label-text m-5">Apple</span>
            </label>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary text-white">Find Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
