import React from "react";
import Loadable from "react-loadable"
const Home = Loadable({
    loader: () => import("../pages/home"),
    loading: () => null
})
const router = [
    {
        path: "/",
        element: <Home />,
        cache: false,
        exact: true,
    }
]
export default router