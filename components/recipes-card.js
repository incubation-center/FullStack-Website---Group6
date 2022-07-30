export default function RecipesCard ()
{
  return (
    <div className="card w-fit bg-base-100 shadow-xl image-full">
      <figure>
        <img src="kokos_curry.png" alt="Kokos Curry" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">Kokos Curry</h2>
        <p></p>
        <div className="card-actions justify-end">
          <button className="btn btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
