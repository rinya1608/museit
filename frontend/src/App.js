import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Wrapper from './components/common/Wrapper'
import About from "./pages/about/About";
import MidiEditor from "editor/MidiEditor";
import AuthService from "./api/AuthService";
import localforage from "localforage";

function App() {
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        setCurrentUser()
    }, []);


    const setCurrentUser = () => {
        AuthService.getCurrentUser()
            .then(u => {
                console.log(u)
                if (u != null) {
                    localforage.setItem("user", u.data)
                    setUser(u.data)
                }
            }).catch(() => {
            AuthService.logout()
            setUser(null)
        })
    }

    const handleSetUser = (u) => {
      setUser(u)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wrapper user={user} setUser={handleSetUser}><About user={user} setUser={handleSetUser}/></Wrapper>}/>
                <Route path="/edit" element={<MidiEditor/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
