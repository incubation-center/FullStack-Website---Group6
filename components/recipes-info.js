import Image from 'next/image';

function RecipesInfo ()
{
  return (
    <div className="card w-96 h-screen flex flex-col">
      <figure>
        <Image src="/kokos_curry.png" width={ 390 } height={ 390 } alt="Kokos Curry" />
      </figure>

      <h1 className="card-title text-3xl font-bold justify-center my-10">Kokos Curry</h1>

      <div className="flex flex-row justify-around my-10">
        <label className="swap swap-flip text-9xl">
          {/* This hidden checkbox controls the state */ }
          <input type="checkbox" style={ { "opacity": 0 } } />
          {/* Avatar  */ }
          <div className="avatar placeholder swap-off">
            <div className="w-32 rounded-full ring-2 ring-error hover:ring-4">
              <div className="flex flex-col space-y-2">
                <svg className="color: red mx-4 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19.48,12.35c-1.57-4.08-7.16-4.3-5.81-10.23c0.1-0.44-0.37-0.78-0.75-0.55C9.29,3.71,6.68,8,8.87,13.62 c0.18,0.46-0.36,0.89-0.75,0.59c-1.81-1.37-2-3.34-1.84-4.75c0.06-0.52-0.62-0.77-0.91-0.34C4.69,10.16,4,11.84,4,14.37 c0.38,5.6,5.11,7.32,6.81,7.54c2.43,0.31,5.06-0.14,6.95-1.87C19.84,18.11,20.6,15.03,19.48,12.35z M10.2,17.38 c1.44-0.35,2.18-1.39,2.38-2.31c0.33-1.43-0.96-2.83-0.09-5.09c0.33,1.87,3.27,3.04,3.27,5.08C15.84,17.59,13.1,19.76,10.2,17.38z" fill="red" />
                </svg>
                <p className="text-xl font-bold text-error">320 Kcal</p>
              </div>
            </div>
          </div>
          {/* Radial Progress  */ }
          <div className="radial-progress text-xl font-bold text-error swap-on" style={ { "--value": 70, "--size": "8rem", "--thickness": "4px" } }>
            320 Kcal
          </div>
        </label>

        <label className="swap swap-flip text-9xl">
          {/* This hidden checkbox controls the state */ }
          <input type="checkbox" style={ { "opacity": 0 } } />
          {/* Avatar  */ }
          <div className="avatar placeholder swap-off">
            <div className="w-32 rounded-full ring-2 ring-secondary hover:ring-4">
              <div className="flex flex-col space-y-3">
                <svg className="bi bi-clock color: blue mx-5 w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" fill="#0000ff" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" fill="#0000ff" />
                </svg>
                <p className="text-xl font-bold text-secondary">45 mins</p>
              </div>
            </div>
          </div>
          {/* Radial Progress  */ }
          <div className="radial-progress text-xl font-bold text-secondary swap-on" style={ { "--value": 40, "--size": "8rem", "--thickness": "4px" } }>
            45 mins
          </div>
        </label>
      </div>

      <div className="card w-96 glass outline justify-center text-primary my-5">
        <div className="card-body p-5 text-neutral hover:underline-offset-2">
          <h2 className="card-title px-3 underline">DESCRIPTION</h2>
          <p>Japanese curry is one of my favorite comfort foods of all time. This curry is a nourishing mix of meat, vegetables, and sauce. Its mild taste and light consistency make it an anytime meal.</p>
        </div>
      </div>
    </div>
  )
}

export default RecipesInfo;
