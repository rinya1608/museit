import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Wrapper from './components/common/Wrapper'
import About from "./pages/about/About";
import MidiEditor from "editor/MidiEditor";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wrapper><About/></Wrapper>}/>
                <Route path="/edit" element={<MidiEditor/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
