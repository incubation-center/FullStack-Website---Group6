export default function RecipesCard ()
{
  return (
    <div className="card w-fit card-side bg-base-100 shadow-md">
      <figure>
        <img src="kokos_curry.png" className="w-48 h-56" alt="Kokos Curry" />
      </figure>
      <div className="card-body">
        <div className="flex">
          <h2 className="card-title">Kokos Curry</h2>
          <p></p>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */ }
            <input type="checkbox" />
            {/* Bookmark Add  */ }
            <svg className="color: rgb(255, 210, 51); swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" fill="#ffd233"></path> <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" fill="#ffd233"></path>
            </svg>
            {/* Bookmark Check  */ }
            <svg className="color: rgb(255, 210, 51); swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" fill="#ffd233"></path>
            </svg>
            {/* <svg className="color: rgb(255, 210, 51); swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" fill="#ffd233"></path> <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" fill="#ffd233"></path>
            </svg> */}
          </label>
        </div>
        <div className="divider"></div>
        <p>🔥 320 Kcal</p>
        <p>🕒 45 mins</p>
      </div>
    </div>
  )
}
