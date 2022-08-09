import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 text-base-100"
          >
            <li>
              <Link href="/cookbooks">
                <a>COOKBOOKS</a>
              </Link>
            </li>

            <li>
              <Link href="/bookmarks">
                <a>BOOKMARKS</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <a className="btn btn-ghost normal-case text-3xl text-base-100">
            Appeti
          </a>
        </Link>
      </div>

      {/* Desktop Navbar */}
      <div className="navbar-center hidden md:flex text-base-100 font-semibold">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/cookbooks">
              <a>COOKBOOKS</a>
            </Link>
          </li>

          <li>
            <Link href="/bookmarks">
              <a>BOOKMARKS</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login">
          <a className="btn text-base-100">login</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
