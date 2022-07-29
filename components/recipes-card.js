export default function RecipesCard ()
{
  return (
    <div class="card w-fit bg-base-100 shadow-xl image-full">
      <figure>
        <img src="kokos_curry.png" alt="Kokos Curry" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Kokos Curry</h2>  
        <p></p>
        <div class="card-actions justify-end">
          <button class="btn btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
