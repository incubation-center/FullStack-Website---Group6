import Link from "next/link";
import { motion } from 'framer-motion';

function Navbar ()
{
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };

  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <motion.div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost md:hidden">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
                variants={ icon }
                initial="hidden"
                animate="visible"
                transition={ {
                  default: { duration: 1, ease: "easeInOut" },
                  fill: { duration: 1, ease: [ 1, 0, 0.8, 1 ] }
                } }
              />
            </motion.svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 text-accent"
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
        </motion.div>
        <Link href="/">
          <a className="btn btn-ghost normal-case text-3xl text-accent">
            Appeti
          </a>
        </Link>
      </div>

      {/* Desktop Navbar */ }
      <div className="navbar-center hidden md:flex text-accent font-semibold">
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
          <a className="btn btn-outline btn-accent">login</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
