import * as React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { inject, observer } from "mobx-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scroll-top";
import BookmarksCard from "../components/bookmarks-card";

function Bookmarks(props) {
  const { bookmarks, bookmarkCount } = props.bookmarkStore;

  return (
    <React.Fragment>
      <Head>
        <title>Bookmarked Recipes</title>
        <meta name="description" content="Bookmarked Recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex flex-col flex-1">
          <div className="flex flex-row mx-5 mt-5">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              whileHover={{ rotateY: 360 }}
              whileTap={{ scale: 1.2 }}
            >
              <svg
                className="bi bi-journal-bookmark-fill color: rgb(255, 210, 51); h-11 w-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"
                  fill="#ffd233"
                />
                <path
                  d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                  fill="#ffd233"
                />
                <path
                  d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                  fill="#ffd233"
                />
              </svg>
            </motion.div>
            <h1 className="text-3xl font-bold my-2">Total:</h1>
            <h2 className="text-2xl font-bold m-3">
              {bookmarkCount} bookmarked
            </h2>
          </div>

          <div className="flex flex-wrap justify-around mb-5">
            {bookmarks.map((_recipe, index) => {
              return (
                <motion.div
                  key={index}
                  className="flex justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <BookmarksCard bookmarked={_recipe} />
                </motion.div>
              );
            })}
          </div>
        </main>

        <ScrollTop />

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default inject("bookmarkStore")(observer(Bookmarks));
