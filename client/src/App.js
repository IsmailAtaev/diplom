import React, {useEffect, useState} from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import NavBar from "./components/NavBar";
import {Route, Router, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Tours from "./components/tour/Tours";
import Home from "./components/Home";
import About from "./components/About";
import DetailsTour from "./components/details/DetailsTour";
import 'bootstrap/dist/css/bootstrap.min.css';
import  SideBarMenu from "./components/sidebar/SideBarMenu"
import Admin from "./components/admin/Admin"
import { getTours } from "../src/store/tourStore/tourSlice";
import ClientInfo from "./components/clientInfo/ClientInfo";
import { useLocation } from "react-router-dom";


const ADMIN = "ADMIN";
const USER= "USER";
const isAuth = USER;

function App() {

    const dispatch = useDispatch();
    const store = useStore();
    
    //const tours = useSelector((state) => state.tour.tours);
    const userStore = useSelector((state) => state);
    const [tour, setTour] = useState([]);
    const [user, setUser] = useState({});
  
    useEffect(() => {
        async function getToursAPI () {
            dispatch(getTours());
        }
        getToursAPI();
    }, [tour]);


    useEffect(() => {
        const ll = userStore.user.user.user;
        console.log("useEffect user: ", ll);
        // console.log(user);
    }, [])

    const getUser = () => {
        const obj = store.getState();
       

        //setUser({...obj.user.user.user});
        //console.log("user app: ", user.user.role);
        // console.log("user app: ", user);
        // islamhan394@gmail.com

      console.log("obj : ", obj);
     
    }



    
    

    return (<div>
        <NavBar getUser={getUser}/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/tours' element={isAuth === "ADMIN" ? <SideBarMenu /> : <Tours/> }/>
            <Route path='/about' element={<About/>}/>
            <Route path='/tour-work' element={<Admin />}/>
            <Route path="/dashboard" element={<About/>}/>
            <Route path="/tour/details" element={<DetailsTour/>}/>
            <Route path="/tour/details/buy" element={<ClientInfo/>}/>
        </Routes>
        <Footer/>
    </div>)
};


export default App;

/*export default React.memo(App);

    <Router>
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