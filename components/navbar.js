import Link from 'next/link'
import { useState } from 'react'

function NavLink ( { to, children } )
{
  return <a href={ to } className={ `mx-5 my-3` }> { children } </a>
}

function MobileNav ( { open, setOpen } )
{
  return (
    <div className={ `absolute top-0 left-0 h-screen w-screen bg-primary transform ${ open ? "-translate-x-0" : "-translate-x-full" } transition-transform duration-300 ease-in-out filter drop-shadow-md ` }>     
      <div className="flex text-primary bg-base-100 h-20 p-5">
        <input type="text" placeholder="Search" className="input input-ghost w-full max-w-xs border-x-0 border-t-0 border-b-4 border-primary text-neutral" />
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col hover:text-neutral">
          <Link href="/cookbooks">
            <a className="text-2xl font-bold m-5" onClick={ () => setTimeout( () => { setOpen( !open ) }, 100 ) }>
              Cookbooks
            </a>
          </Link>
        </div>
        <div className="flex flex-col hover:text-neutral">
          <Link href="/bookmarks">
            <a className="text-2xl font-bold m-5" onClick={ () => setTimeout( () => { setOpen( !open ) }, 100 ) }>
              Bookmarks
          </a>
          </Link>
        </div>
        <div className="flex flex-col hover:text-neutral">
          <Link href="/login">
            <a className="text-2xl font-bold m-5" onClick={ () => setTimeout( () => { setOpen( !open ) }, 100 ) }>
              Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Navbar ()
{
  const [ open, setOpen ] = useState( false )
  return (
    <nav className="flex filter drop-shadow-md bg-primary text-base-100 font-bold p-5 h-20 items-center">
      <MobileNav open={ open } setOpen={ setOpen } />
      <div className="w-3/12 flex items-center text-5xl">
        <Link href="/">Growl</Link>
      </div>

      <div className="w-9/12 flex justify-end items-center">
        <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden bg-primary" onClick={ () =>
        {
          setOpen( !open )
        } }>
          {/* Hamburger Button */ }
          <span className={ `h-1 w-full bg-base-100 rounded-lg transform transition duration-300 ease-in-out ${ open ? "rotate-45 translate-y-3.5" : "" }` } />
          <span className={ `h-1 w-full bg-base-100 rounded-lg transition-all duration-300 ease-in-out ${ open ? "w-0 " : "w-full" }` } />
          <span className={ `h-1 w-full bg-base-100 rounded-lg transform transition duration-300 ease-in-out ${ open ? "-rotate-45 -translate-y-3.5" : "" }` } />
        </div>

        <div className="hidden md:flex">
          <div className="hidden md:flex hover:text-neutral">
            <NavLink to="/cookbooks">
              COOKBOOKS
            </NavLink>
          </div>
          <div className="hidden md:flex hover:text-neutral">
            <NavLink to="/bookmarks">
              BOOKMARKS
            </NavLink>
          </div>

          <input type="text" placeholder="Search" className="input input-ghost w-full max-w-xs border-x-0 border-t-0 border-b-4 border-base-100 text-neutral ml-5" />
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <div className="hidden md:flex hover:text-neutral">
            <NavLink to="/login">
              LOGIN
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
