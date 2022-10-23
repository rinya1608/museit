import Header from "../header/Header";
import React from "react";

const Wrapper = ({children}) => {
    return (
        <div className="app">
            <Header/>
            <div className="main">
                {children}
            </div>
        </div>
    )
}

export default Wrapper;