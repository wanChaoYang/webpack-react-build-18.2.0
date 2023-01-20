import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const list = [ 1, 2, 3, 4, 5, 7, 8 ]
    const oChange = () => {
        const numList = list.filter(item => item % 2 === 0)
        navigate("/about")
    }
    return (
        <div onClick={oChange}>999</div>
    )
}
export default Home