import Image from 'next/image'

export default function RecipesCard ()
{
  return (
    <div className="card w-fit h-fit card-side shadow-md hover:shadow-xl m-5">
      <figure>
        <Image src="/kokos_curry.png" width={ 200 } height={ 216 } alt="Kokos Curry" />
      </figure>
      <div className="card-body">

        <div className="flex">
          <h2 className="card-title">Kokos Curry</h2>
          <label className="swap swap-rotate">
            {/* This hidden checkbox controls the state */ }
            <input type="checkbox" />
            {/* Bookmark Add  */ }
            <svg className="bi bi-bookmark-plus color: rgb(255, 210, 51); swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" fill="#ffd233"></path> <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" fill="#ffd233"></path>
            </svg>
            {/* Bookmark Check  */ }
            <svg className="bi bi-bookmark-check-fill color: rgb(255, 210, 51); swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" fill="#ffd233"></path>
            </svg>
            {/* <svg className="bi bi-bookmark-check color: rgb(255, 210, 51); swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" fill="#ffd233"></path> <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" fill="#ffd233"></path>
              </svg> */}
          </label>
        </div>
        
        <div className="divider my-2"></div>

        <div className="flex flex-row">
          <svg className="color: red mx-2 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19.48,12.35c-1.57-4.08-7.16-4.3-5.81-10.23c0.1-0.44-0.37-0.78-0.75-0.55C9.29,3.71,6.68,8,8.87,13.62 c0.18,0.46-0.36,0.89-0.75,0.59c-1.81-1.37-2-3.34-1.84-4.75c0.06-0.52-0.62-0.77-0.91-0.34C4.69,10.16,4,11.84,4,14.37 c0.38,5.6,5.11,7.32,6.81,7.54c2.43,0.31,5.06-0.14,6.95-1.87C19.84,18.11,20.6,15.03,19.48,12.35z M10.2,17.38 c1.44-0.35,2.18-1.39,2.38-2.31c0.33-1.43-0.96-2.83-0.09-5.09c0.33,1.87,3.27,3.04,3.27,5.08C15.84,17.59,13.1,19.76,10.2,17.38z" fill="red"></path>
          </svg>
          <p className="my-1">320 Kcal</p>
        </div>

        <div className="flex flex-row">
          <svg className="bi bi-clock color: blue mx-3 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" fill="#0000ff"></path>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" fill="#0000ff"></path>
          </svg>
          <p>45 mins</p>
        </div>
      </div>
    </div>
  )
}
