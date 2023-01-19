import React from "react";
const home = () => {
    const list = [ 1, 2, 3, 4, 5, 7, 8 ]
    const oChange = () => {
        const numList = list.filter(item => item % 2 === 0)
        console.log(numList);
    }
    return (
        <div onClick={oChange}>999</div>
    )
}
export default home