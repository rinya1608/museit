import Header from "../header/Header";
import React from "react";
import Footer from "../footer/Footer";

const Wrapper = ({children}) => {
    return (
        <div className="app">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Wrapper;