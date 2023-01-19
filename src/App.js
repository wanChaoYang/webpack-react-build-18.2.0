import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//react-router-cache-route目前还不支持reactv18和routerv5
// import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import router from "./router/index.js";
import "./global.less"
const App = () => {
    return (
        <Router>
            <Routes>
                {
                    router.map(item => {
                        return (
                            <Route
                                exact={item.exact}
                                path={item.path}
                                element={item.element}
                                key={item.path}
                            />
                        )
                    })
                }
            </Routes>
        </Router>
    )
}
export default App