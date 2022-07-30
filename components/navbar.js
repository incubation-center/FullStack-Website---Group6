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
      <div className="flex items-center filter drop-shadow-md text-primary bg-white text-5xl h-20 p-5"> {/*Logo Container*/ }
        <Link href="/">Growl</Link>
      </div>
      <div className="flex flex-col">
        <a className="text-xl font-bold m-5" href="/cookbooks" onClick={ () => setTimeout( () => { setOpen( !open ) }, 100 ) }>
          Cookbooks
        </a>
        <a className="text-xl font-bold m-5" href="/bookmarks" onClick={ () => setTimeout( () => { setOpen( !open ) }, 100 ) }>
          Bookmarks
        </a>
        <a className="text-xl font-bold m-5" href="/login" onClick={ () => setTimeout( () => { setOpen( !open ) }, 100 ) }>
          Login
        </a>
      </div>
    </div>
  )
}

export default function Navbar ()
{
  const [ open, setOpen ] = useState( false )
  return (
    <nav className="flex filter drop-shadow-md bg-primary text-white font-bold p-5 h-20 items-center">
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
          <span className={ `h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${ open ? "rotate-45 translate-y-3.5" : "" }` } />
          <span className={ `h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${ open ? "w-0 " : "w-full" }` } />
          <span className={ `h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${ open ? "-rotate-45 -translate-y-3.5" : "" }` } />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/cookbooks">
            COOKBOOKS
          </NavLink>
          <NavLink to="/bookmarks">
            BOOKMARKS
          </NavLink>       
          <input type="text" placeholder="Search" className="input w-full max-w-xs text-black ml-5" />
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <NavLink to="/login">
            LOGIN
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
