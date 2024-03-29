import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence} from "framer-motion";
import useAuth from "../lib/hook/AuthProvider";

const variants = {
  fadeIn: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  inActive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  fadeOut: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { loginWithGoogle, user, error, loginWithEmailPassword, setError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await loginWithEmailPassword(email, password)

    if(data.user) {
      router.push("/");
    }
  };

  useEffect(()=> {
    setError("")
  },[setError])

  const signInWithGoogle = async () => {
    await loginWithGoogle();
    router.push("/");
  }

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
          variants={variants}
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
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Welcome back!
                </h1>

                <p className="mt-5">
                  In order to see the recipes that you saved, log in to your
                  account.
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input
                    value={email}
                    onChange={(e)=> {
                      setEmail(e.target.value)
                    }}
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
                    value={password}
                    onChange={(e)=> {
                      setPassword(e.target.value)
                    }}
                    type={showPassword ? "text" : "password"}
                    className="w-full p-4 pr-12 text-sm border-base-200 focus:border-primary rounded-lg shadow-sm"
                    placeholder="Enter your Password"
                  />

                  <span
                    className="absolute inset-y-0 inline-flex items-center right-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
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

              {error ? <div className="font-bold text-error px-3">{error}</div>: <></>}

              <motion.div
                className="flex items-center justify-between max-w-md mx-auto"
                key="/register"
              >
                <p className="text-sm text-neutral/80">
                  Don&apos;t have an account?
                  <Link href="/register">
                    <a className="font-bold hover:text-primary underline mx-1">
                      Register
                    </a>
                  </Link>
                </p>

                <motion.button
                  // type="submit"
                  onClick={onSubmit}
                  className="inline-block px-5 py-3 text-sm font-medium text-accent bg-primary rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Login
                </motion.button>
              </motion.div>

              <motion.button
                type="button"
                onClick={signInWithGoogle}
                className="px-5 py-2 text-sm font-medium text-accent bg-primary rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg
                  className="bi bi-google w-7 h-7 mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                    fill="white"
                  ></path>
                </svg>
                <span className="pl-2">Sign In with Google</span>
              </motion.button>
            </form>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
}

export default Login;