import React from "react";
import Loadable from "react-loadable"
const Home = Loadable({
    loader: () => import("../pages/home"),
    loading: () => null
})
const About = Loadable({
    loader: () => import("../pages/about"),
    loading: () => null
})
const router = [
    {
        path: "/",
        element: <Home />,
        cache: false,
        exact: true,
    },
    {
        path: "/about",
        element: <About />,
        cache: false,
        exact: false,
    }
]
export default router