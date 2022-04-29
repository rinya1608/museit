import React from "react";
import FileUploader from "./components/fileUpload/FileUploader";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/about/About";
import Header from "./components/header/Header";

function App() {

    return (
        <div className="app">
            <Header/>
            <div className="main">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<About/>}/>
                        <Route path="/file" element={<FileUploader/>}/>
                    </Routes>
                </BrowserRouter>
            </div>

        </div>
    );
}

export default App;
