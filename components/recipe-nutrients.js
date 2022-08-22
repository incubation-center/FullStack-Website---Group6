function RecipeNutrients ()
{
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-8 gap-5 lg:gap-10 xl:gap-20">
      {/* Cook Time */}
      <label className="swap swap-flip text-9xl">
        {/* This hidden checkbox controls the state */}
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */}
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-secondary hover:ring-4">
            <div className="flex flex-col items-center space-y-3">
              <svg className="bi bi-clock color: rgb(87, 13, 248); w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" fill="#570df8" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" fill="#570df8" />
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
      <label className="swap swap-flip text-9xl">
        {/* This hidden checkbox controls the state */}
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */}
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-error hover:ring-4">
            <div className="flex flex-col items-center space-y-2">
              <svg className="color: red w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
      <label className="swap swap-flip text-9xl">
        {/* This hidden checkbox controls the state */ }
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */ }
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-info hover:ring-4">
            <div className="flex flex-col items-center">
              <svg className="color: rgb(58, 191, 248); w-14 h-14" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.78 8.348c-.77 0-1.396.615-1.396 1.37 0 1.075.406 2.058 1.075 2.813.277.312.598.584.956.807a5 5 0 0 0 .736-3.874c-.005-.029-.013-.058-.02-.087a1.392 1.392 0 0 0-1.35-1.029zm-8.612 3.958c.138.366.317.712.533 1.032.356-.223.678-.495.955-.807a4.221 4.221 0 0 0 1.076-2.813c0-.755-.626-1.37-1.397-1.37-.65 0-1.195.438-1.35 1.029-.006.029-.015.057-.02.086a5.002 5.002 0 0 0 .205 2.843zm15.501-.67L24 12.29a5.873 5.873 0 0 1-5.243 3.18 5.958 5.958 0 0 1-1.926-.32 6.745 6.745 0 0 1-4.774 1.963 6.742 6.742 0 0 1-4.774-1.964 5.943 5.943 0 0 1-1.926.32A5.87 5.87 0 0 1 0 12.054l1.362-.595a4.38 4.38 0 0 0 3.995 2.549c.324 0 .641-.036.946-.102a6.45 6.45 0 0 1-.945-3.367 6.512 6.512 0 0 1 .19-1.554c.328-1.208 1.45-2.098 2.786-2.098l.079.002c.08.002.162.008.242.016 1.444.157 2.565 1.357 2.565 2.814 0 1.958-.999 3.687-2.522 4.724a5.244 5.244 0 0 0 3.36 1.21 5.247 5.247 0 0 0 3.358-1.21c-1.523-1.037-2.522-2.767-2.522-4.724 0-1.458 1.122-2.658 2.564-2.814.08-.008.16-.014.242-.016l.08-.002a2.877 2.877 0 0 1 2.832 2.286 6.478 6.478 0 0 1-.8 4.733c.305.066.62.102.945.102 1.71 0 3.191-.967 3.91-2.372z" fill="#3abff8" />
              </svg>
              <p className="text-xl font-bold text-info mb-2">Protein</p>
            </div>
          </div>
        </div>
        {/* Radial Progress */ }
        <div className="radial-progress text-xl font-bold text-info swap-on" style={ { "--value": 70, "--size": "8rem", "--thickness": "4px" } }>
          320
        </div>
      </label>

      {/* Carbs */ }
      <label className="swap swap-flip text-9xl">
        {/* This hidden checkbox controls the state */ }
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */ }
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-orange-400 hover:ring-4">
            <div className="flex flex-col items-center space-y-3">            
              <svg className="color: rgb(251, 146, 60); w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                {/* Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                <path d="M256 112V128C256 136.8 248.8 144 240 144C195.8 144 160 108.2 160 64V48C160 39.16 167.2 32 176 32C220.2 32 256 67.82 256 112zM104 64C117.3 64 128 74.75 128 88C128 101.3 117.3 112 104 112H56C42.75 112 32 101.3 32 88C32 74.75 42.75 64 56 64H104zM136 136C149.3 136 160 146.7 160 160C160 173.3 149.3 184 136 184H24C10.75 184 0 173.3 0 160C0 146.7 10.75 136 24 136H136zM32 232C32 218.7 42.75 208 56 208H104C117.3 208 128 218.7 128 232C128 245.3 117.3 256 104 256H56C42.75 256 32 245.3 32 232zM272 48C272 39.16 279.2 32 288 32C332.2 32 368 67.82 368 112V128C368 136.8 360.8 144 352 144C307.8 144 272 108.2 272 64V48zM480 112V128C480 136.8 472.8 144 464 144C419.8 144 384 108.2 384 64V48C384 39.16 391.2 32 400 32C444.2 32 480 67.82 480 112zM480 208C480 252.2 444.2 288 400 288C391.2 288 384 280.8 384 272V256C384 211.8 419.8 176 464 176C472.8 176 480 183.2 480 192V208zM352 176C360.8 176 368 183.2 368 192V208C368 252.2 332.2 288 288 288C279.2 288 272 280.8 272 272V256C272 211.8 307.8 176 352 176zM256 208C256 252.2 220.2 288 176 288C167.2 288 160 280.8 160 272V256C160 211.8 195.8 176 240 176C248.8 176 256 183.2 256 192V208zM0 352C0 334.3 14.33 320 32 320H480C497.7 320 512 334.3 512 352C512 411.7 471.1 461.9 415.8 476C415.9 477.3 416 478.7 416 480C416 497.7 401.7 512 384 512H128C110.3 512 96 497.7 96 480C96 478.7 96.08 477.3 96.24 476C40.91 461.9 0 411.7 0 352V352z" fill="#fb923c" />
              </svg>
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
      <label className="swap swap-flip text-9xl">
        {/* This hidden checkbox controls the state */}
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */}
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-success hover:ring-4">
            <div className="flex flex-col items-center space-y-3">
              <svg className="color: rgb(54, 211, 153); w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M150.38,253.68l21.94-23.3,11.65,11c73.63,69.36,147.51,111.56,234.45,133.07,11.73-32,12.77-67.22,2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.25-26-76.6-32.09-115.09-38.54-21.12-3.54-43-7.2-66.85-14.43C104.85,91.76,58.94,52.3,58.48,51.91L33.4,30.15,32,63.33c-.1,2.56-2.42,63.57,14.22,147.77,17.58,89,50.24,155.85,97.07,198.63,38,34.69,87.62,53.9,136.93,53.9A185.88,185.88,0,0,0,308,461.56c41.72-6.32,76.43-27.27,96-57.75-89.5-23.28-165.95-67.55-242-139.16Z" fill="#36d399" />
                <path d="M467.43,384.19c-16.83-2.59-33.13-5.84-49-9.77A158.49,158.49,0,0,1,406.3,400.1c-.74,1.25-1.51,2.49-2.29,3.71a583.43,583.43,0,0,0,58.55,12l15.82,2.44,4.86-31.63Z" fill="#36d399" />
              </svg>
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
      <label className="swap swap-flip text-9xl">
        {/* This hidden checkbox controls the state */ }
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */ }
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-yellow-400 hover:ring-4">
            <div className="flex flex-col items-center space-y-2">
              <svg className="color: rgb(250, 204, 21); w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                {/* Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                <path d="M215.3 143.4C243.5 95.07 274.2 49.29 294.9 19.3C307.2 1.585 332.8 1.585 345.1 19.3C393.7 89.43 496 245.9 496 319.1C496 333.7 494.4 347.1 491.5 359.9L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L215.3 143.4zM143.1 319.1C143.1 296.5 154.3 264.6 169.1 229.9L443.5 445.4C411.7 476.7 368.1 496 319.1 496C222.8 496 143.1 417.2 143.1 319.1V319.1zM239.1 319.1C239.1 311.2 232.8 303.1 223.1 303.1C215.2 303.1 207.1 311.2 207.1 319.1C207.1 381.9 258.1 432 319.1 432C328.8 432 336 424.8 336 416C336 407.2 328.8 400 319.1 400C275.8 400 239.1 364.2 239.1 319.1V319.1z" fill="#facc15" />
              </svg>
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
      <label className="swap swap-flip text-9xl">
        {/* This hidden checkbox controls the state */}
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */}
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-neutral/50 dark:ring-accent/50 hover:ring-4">
            <div className="flex flex-col items-center space-y-2">
              <svg className="color: rgb(153, 165, 191); w-10 h-10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path fill="#99a5bf" d="m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z" />
              </svg>
              <p className="text-xl font-bold text-neutral/50 dark:text-accent/50">Sugar</p>
            </div>
          </div>
        </div>
        {/* Radial Progress */}
        <div className="radial-progress text-xl font-bold text-neutral/50 dark:text-accent/50 swap-on" style={ { "--value": 70, "--size": "8rem", "--thickness": "4px" } }>
          320
        </div>
      </label>

      {/* Cholesterol */}
      <label className="swap swap-flip text-9xl">
        {/* This hidden checkbox controls the state */}
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Avatar */}
        <div className="avatar placeholder swap-off">
          <div className="w-32 rounded-full ring-2 ring-warning hover:ring-4">
            <div className="flex flex-col items-center space-y-3">
              <svg className="color: rgb(251, 189, 35); w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                {/* Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                <path d="M352.4 243.8l-49.83 99.5c-6.009 12-23.41 11.62-28.92-.625L216.7 216.3l-30.05 71.75L88.55 288l176.4 182.2c12.66 13.07 33.36 13.07 46.03 0l176.4-182.2l-112.1 .0052L352.4 243.8zM495.2 62.86c-54.36-46.98-137.5-38.5-187.5 13.06L288 96.25L268.3 75.92C218.3 24.36 135.2 15.88 80.81 62.86C23.37 112.5 16.84 197.6 60.18 256h105l35.93-86.25c5.508-12.88 23.66-13.12 29.54-.375l58.21 129.4l49.07-98c5.884-11.75 22.78-11.75 28.67 0l27.67 55.25h121.5C559.2 197.6 552.6 112.5 495.2 62.86z" fill="#fbbd23" />
              </svg>
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
