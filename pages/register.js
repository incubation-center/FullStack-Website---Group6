import "../styles/Home.module.css";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const variants = {
  in: {
    scale: 0.8,
    y: 100,
    x: "100%",
    transition: {
      duration: 0.4
    }
  },
  center: {
    x: 0,
    scale: 0.8,
    transformOrigin: "top",
    transition: {
      duration: 0.4
    }
  },
  scaleUp: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5
    }
  },
  scaleDown: {
    scale: 0.8,
    y: 100,
    transition: {
      duration: 0.4
    }
  },
  out: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: 0.4,
      delay: 0.5
    }
  }
};

function Register ()
{
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [ showPassword, setShowPassword ] = useState( false );

  const onSubmit = ( e ) =>
  {
    e.preventDefault();
    router.push( "/" );
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.section
        className="relative flex flex-wrap items-center h-screen"
        variants={ !shouldReduceMotion ? variants : null }
        initial="in"
        animate={ [ "center", "scaleUp" ] }
        exit={ [ "scaleDown", "out" ] }
      >
        
        <div className="relative lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src="https://source.unsplash.com/random/?food"
            layout="fill"
            alt="Random Food Images"
          />
        </div>
        
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
          // style={ {
          //   '@media (minWidth: 768px)' {
          //     backgroundImage: `url("https://source.unsplash.com/random/?food")`,
          //   }
          // }}
        >
          <div className="max-w-lg mx-auto text-center text-neutral/80">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

            <p className="mt-4">
              In order to save the recipes that you like, register here with us.
            </p>
          </div>

          <form className="max-w-md mx-auto mt-10 space-y-5">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full p-4 pr-12 text-sm border-base-200 focus:border-primary rounded-lg shadow-sm"
                  placeholder="Enter your Email"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-neutral/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type={ showPassword ? "text" : "password" }
                  className="w-full p-4 pr-12 text-sm border-base-200 focus:border-primary rounded-lg shadow-sm"
                  placeholder="Enter your Password"
                />

                <span
                  className="absolute inset-y-0 inline-flex items-center right-4 cursor-pointer"
                  onClick={ () => setShowPassword( !showPassword ) }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-neutral/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <motion.div className="flex items-center justify-between" key="/login">
              <p className="text-sm text-neutral/80 ">
                Already have an account?
                <Link href="/login">
                  <a className="font-bold hover:text-primary underline mx-1">Sign in</a>
                </Link>
              </p>

              <motion.button
                // type="submit"
                onClick={ onSubmit }
                className="inline-block px-5 py-3 text-sm font-medium text-accent bg-primary rounded-lg"
                whileHover={ { scale: 1.1 } }
                whileTap={ { scale: 0.9 } }
                transition={ { type: "spring", stiffness: 400, damping: 17 } }
              >
                Register
              </motion.button>
            </motion.div>
          </form>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default Register;
