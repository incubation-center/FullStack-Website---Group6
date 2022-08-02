"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/navbar.js



function NavLink({ to , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: to,
        className: `mx-5 my-3`,
        children: [
            " ",
            children,
            " "
        ]
    });
}
function MobileNav({ open , setOpen  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `absolute top-0 left-0 h-screen w-screen bg-primary transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex text-primary bg-base-100 h-20 p-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Search",
                        className: "input input-ghost w-full max-w-xs border-x-0 border-t-0 border-b-4 border-primary text-neutral"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-ghost btn-circle",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col hover:text-neutral",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/cookbooks",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-2xl font-bold m-5",
                                onClick: ()=>setTimeout(()=>{
                                        setOpen(!open);
                                    }, 100),
                                children: "Cookbooks"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col hover:text-neutral",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/bookmarks",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-2xl font-bold m-5",
                                onClick: ()=>setTimeout(()=>{
                                        setOpen(!open);
                                    }, 100),
                                children: "Bookmarks"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col hover:text-neutral",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/login",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-2xl font-bold m-5",
                                onClick: ()=>setTimeout(()=>{
                                        setOpen(!open);
                                    }, 100),
                                children: "Login"
                            })
                        })
                    })
                ]
            })
        ]
    });
}
function Navbar() {
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex filter drop-shadow-md bg-primary text-base-100 font-bold p-5 h-20 items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MobileNav, {
                open: open,
                setOpen: setOpen
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-3/12 flex items-center text-5xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: "Growl"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-9/12 flex justify-end items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden bg-primary",
                        onClick: ()=>{
                            setOpen(!open);
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `h-1 w-full bg-base-100 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `h-1 w-full bg-base-100 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0 " : "w-full"}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `h-1 w-full bg-base-100 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden md:flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden md:flex hover:text-neutral",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                    to: "/cookbooks",
                                    children: "COOKBOOKS"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden md:flex hover:text-neutral",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                    to: "/bookmarks",
                                    children: "BOOKMARKS"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                placeholder: "Search",
                                className: "input input-ghost w-full max-w-xs border-x-0 border-t-0 border-b-4 border-base-100 text-neutral ml-5"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-ghost btn-circle",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden md:flex hover:text-neutral",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                    to: "/login",
                                    children: "LOGIN"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/footer.js

function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer items-center p-3 bg-primary text-base-100",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "items-center grid-flow-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "36",
                        height: "36",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: "fill-current",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Copyright \xa9 2022 - All right reserved"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid-flow-col gap-4 md:place-self-center md:justify-self-end",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "text-base font-normal hover:text-neutral m-3",
                    href: "/privacypolicy",
                    onClick: ()=>setTimeout(()=>{
                            setOpen(!open);
                        }, 100),
                    children: "Privacy Policy"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,910,952,63], () => (__webpack_exec__(8238)));
module.exports = __webpack_exports__;

})();