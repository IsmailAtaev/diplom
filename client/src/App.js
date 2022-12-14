import React, {useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import {Route, Router, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Tours from "./components/tour/Tours";
import Home from "./components/Home";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const url = 'http://localhost:5000/auth/users';

let c = 0

function App() {
    console.log("isma")
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const ee = axios.get(url).then((resolve) => console.log(resolve.data));
        setUsers(ee.data);
    }, [])

    /* const onJ = () => {
         c += 1;
         console.log("click ", c)

         axios.get(url).then((response) => {
             console.log(response)
         })
     }*/

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


export default App;
//export default React.memo(App);

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