import Header from "../header/Header";
import React from "react";
import Footer from "../footer/Footer";

const Wrapper = ({user, setUser, children}) => {
    return (
        <div className="app">
            <Header user={user} setUser={setUser}/>
            {children}
            <Footer/>
        </div>
    )
}

export default Wrapper;