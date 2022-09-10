import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const variants = {
  fadeIn: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  },
  inActive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  },
  fadeOut: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

function Login ()
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
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/login.ico?" />
      </Head>
      
      <AnimatePresence mode="wait">
        <motion.section
          className="relative flex flex-wrap items-center h-screen"
          variants={ variants }
          initial="fadeIn"
          animate="inActive"
          exit="fadeOut"
        >

          <div className="relative lg:w-1/2 lg:h-full">
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src="https://source.unsplash.com/random/?food"
              layout="fill"
              alt="Random Food Images"
            />
          </div>

          <div className="flex justify-center items-center w-full lg:w-1/2 h-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="lg:hidden">
              <Image
                className="absolute inset-0 object-cover w-full h-full"
                src="https://source.unsplash.com/random/?food"
                layout="fill"
                alt="Random Food Images"     
              />
            </div>

            <form className="relative bg-accent/70 rounded-lg p-5 space-y-5">
              <div className="max-w-lg mx-auto text-center text-neutral/80 mb-10">
                <h1 className="text-2xl font-bold sm:text-3xl">Welcome back!</h1>

                <p className="mt-5">
                  In order to see the recipes that you saved, log in to your account.
                </p>
              </div>

              <div className="max-w-md mx-auto">
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

              <div className="max-w-md mx-auto">
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

              <motion.div className="flex items-center justify-between max-w-md mx-auto" key="/register">
                <p className="text-sm text-neutral/80">
                  Don&apos;t have an account?
                  <Link href="/register">
                    <a className="font-bold hover:text-primary underline mx-1">Register</a>
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
                  Login
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
}

export default Login;
