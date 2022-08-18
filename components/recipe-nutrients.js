function RecipeNutrients ()
{
  return (
    <div className="flex flex-wrap justify-around my-10">
      {/* Cook Time */}
      <label className="swap swap-flip text-9xl my-5">
        {/* This hidden checkbox controls the state */}
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */}
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-secondary hover:ring-4">
            <div className="flex flex-col items-center space-y-3">
              <svg className="bi bi-clock color: blue mx-5 w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" fill="#0000ff" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" fill="#0000ff" />
              </svg>
              <p className="text-xl font-bold text-secondary">Cook Time</p>
            </div>
          </div>
        </div>
        {/* Radial Progress */}
        <div className="radial-progress text-xl font-bold text-secondary swap-on" style={ { "--value": 40, "--size": "8rem", "--thickness": "4px" } }>
          45 mins
        </div>
      </label>

      {/* Calories */}
      <label className="swap swap-flip text-9xl my-5">
        {/* This hidden checkbox controls the state */}
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */}
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-error hover:ring-4">
            <div className="flex flex-col items-center space-y-2">
              <svg className="color: red mx-4 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19.48,12.35c-1.57-4.08-7.16-4.3-5.81-10.23c0.1-0.44-0.37-0.78-0.75-0.55C9.29,3.71,6.68,8,8.87,13.62 c0.18,0.46-0.36,0.89-0.75,0.59c-1.81-1.37-2-3.34-1.84-4.75c0.06-0.52-0.62-0.77-0.91-0.34C4.69,10.16,4,11.84,4,14.37 c0.38,5.6,5.11,7.32,6.81,7.54c2.43,0.31,5.06-0.14,6.95-1.87C19.84,18.11,20.6,15.03,19.48,12.35z M10.2,17.38 c1.44-0.35,2.18-1.39,2.38-2.31c0.33-1.43-0.96-2.83-0.09-5.09c0.33,1.87,3.27,3.04,3.27,5.08C15.84,17.59,13.1,19.76,10.2,17.38z" fill="red" />
              </svg>
              <p className="text-xl font-bold text-error">Calories</p>
            </div>
          </div>
        </div>
        {/* Radial Progress */}
        <div className="radial-progress text-xl font-bold text-error swap-on" style={ { "--value": 70, "--size": "8rem", "--thickness": "4px" } }>
          320
        </div>
      </label>

      {/* Protein */ }
      <label className="swap swap-flip text-9xl my-5">
        {/* This hidden checkbox controls the state */ }
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */ }
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-info hover:ring-4">
            <div className="flex flex-col items-center space-y-2">
              {/* <svg className="color: red mx-4 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19.48,12.35c-1.57-4.08-7.16-4.3-5.81-10.23c0.1-0.44-0.37-0.78-0.75-0.55C9.29,3.71,6.68,8,8.87,13.62 c0.18,0.46-0.36,0.89-0.75,0.59c-1.81-1.37-2-3.34-1.84-4.75c0.06-0.52-0.62-0.77-0.91-0.34C4.69,10.16,4,11.84,4,14.37 c0.38,5.6,5.11,7.32,6.81,7.54c2.43,0.31,5.06-0.14,6.95-1.87C19.84,18.11,20.6,15.03,19.48,12.35z M10.2,17.38 c1.44-0.35,2.18-1.39,2.38-2.31c0.33-1.43-0.96-2.83-0.09-5.09c0.33,1.87,3.27,3.04,3.27,5.08C15.84,17.59,13.1,19.76,10.2,17.38z" fill="red" />
              </svg> */}
              <p className="text-xl font-bold text-info">Protein</p>
            </div>
          </div>
        </div>
        {/* Radial Progress */ }
        <div className="radial-progress text-xl font-bold text-info swap-on" style={ { "--value": 70, "--size": "8rem", "--thickness": "4px" } }>
          320
        </div>
      </label>

      {/* Carbs */ }
      <label className="swap swap-flip text-9xl my-5">
        {/* This hidden checkbox controls the state */ }
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */ }
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-orange-400 hover:ring-4">
            <div className="flex flex-col items-center space-y-3">
              {/* <svg className="bi bi-clock color: blue mx-5 w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" fill="#0000ff" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" fill="#0000ff" />
              </svg> */}
              <p className="text-xl font-bold text-orange-400">Carbs</p>
            </div>
          </div>
        </div>
        {/* Radial Progress */ }
        <div className="radial-progress text-xl font-bold text-orange-400 swap-on" style={ { "--value": 40, "--size": "8rem", "--thickness": "4px" } }>
          45
        </div>
      </label>

      {/* Fiber */}
      <label className="swap swap-flip text-9xl my-5">
        {/* This hidden checkbox controls the state */}
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */}
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-success hover:ring-4">
            <div className="flex flex-col items-center space-y-3">
              {/* <svg className="bi bi-clock color: blue mx-5 w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" fill="#0000ff" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" fill="#0000ff" />
              </svg> */}
              <p className="text-xl font-bold text-success">Fiber</p>
            </div>
          </div>
        </div>
        {/* Radial Progress */}
        <div className="radial-progress text-xl font-bold text-success swap-on" style={ { "--value": 40, "--size": "8rem", "--thickness": "4px" } }>
          45
        </div>
      </label>

      {/* Fat */ }
      <label className="swap swap-flip text-9xl my-5">
        {/* This hidden checkbox controls the state */ }
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */ }
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-yellow-400 hover:ring-4">
            <div className="flex flex-col items-center space-y-3">
              {/* <svg className="bi bi-clock color: blue mx-5 w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" fill="#0000ff" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" fill="#0000ff" />
              </svg> */}
              <p className="text-xl font-bold text-yellow-400">Fat</p>
            </div>
          </div>
        </div>
        {/* Radial Progress */ }
        <div className="radial-progress text-xl font-bold text-yellow-400 swap-on" style={ { "--value": 40, "--size": "8rem", "--thickness": "4px" } }>
          45
        </div>
      </label>

      {/* Sugar */}
      <label className="swap swap-flip text-9xl my-5">
        {/* This hidden checkbox controls the state */}
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */}
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-neutral/50 hover:ring-4">
            <div className="flex flex-col items-center space-y-2">
              {/* <svg className="color: red mx-4 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19.48,12.35c-1.57-4.08-7.16-4.3-5.81-10.23c0.1-0.44-0.37-0.78-0.75-0.55C9.29,3.71,6.68,8,8.87,13.62 c0.18,0.46-0.36,0.89-0.75,0.59c-1.81-1.37-2-3.34-1.84-4.75c0.06-0.52-0.62-0.77-0.91-0.34C4.69,10.16,4,11.84,4,14.37 c0.38,5.6,5.11,7.32,6.81,7.54c2.43,0.31,5.06-0.14,6.95-1.87C19.84,18.11,20.6,15.03,19.48,12.35z M10.2,17.38 c1.44-0.35,2.18-1.39,2.38-2.31c0.33-1.43-0.96-2.83-0.09-5.09c0.33,1.87,3.27,3.04,3.27,5.08C15.84,17.59,13.1,19.76,10.2,17.38z" fill="red" />
              </svg> */}
              <p className="text-xl font-bold text-neutral/50">Sugar</p>
            </div>
          </div>
        </div>
        {/* Radial Progress */}
        <div className="radial-progress text-xl font-bold text-neutral/50 swap-on" style={ { "--value": 70, "--size": "8rem", "--thickness": "4px" } }>
          320
        </div>
      </label>

      {/* Cholesterol */}
      <label className="swap swap-flip text-9xl my-5">
        {/* This hidden checkbox controls the state */}
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */}
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-warning hover:ring-4">
            <div className="flex flex-col items-center space-y-3">
              {/* <svg className="bi bi-clock color: blue mx-5 w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" fill="#0000ff" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" fill="#0000ff" />
              </svg> */}
              <p className="text-xl font-bold text-warning">Cholesterol</p>
            </div>
          </div>
        </div>
        {/* Radial Progress */}
        <div className="radial-progress text-xl font-bold text-warning swap-on" style={ { "--value": 40, "--size": "8rem", "--thickness": "4px" } }>
          45
        </div>
      </label>
    </div>
  )
}

export default RecipeNutrients;
