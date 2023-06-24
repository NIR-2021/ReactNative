import React from "react";
import Header from './component/Header';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Contact from './component/Contact';
import Image from './API'


const App = () => {
    return(
        <BrowserRouter>
            <Header />
                <Route exact path='/' component={Image} />
                <Route path='/contact/:user/:testing' element={Contact} />
        </BrowserRouter>
    )
}

export default App;