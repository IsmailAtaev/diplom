import React from "react";
import NavBar from "./components/NavBar";
import {Route, Router, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Tours from "./components/Tours";
import Home from "./components/Home";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (<>
        <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/tours' element={<Tours/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>

    </>)
};

/*
*    <Router>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/tours' element={<Tours/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </Router>
        <Footer/>
*
* */