import { React, useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Tours from "./components/tour/Tours";
import Home from "./components/Home";
import About from "./components/About";
import DetailsTour from "./components/details/DetailsTour";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBarMenu from "./components/sidebar/SideBarMenu";
import Admin from "./components/admin/Admin";
import { getTours } from "../src/store/tourStore/tourSlice";
import ClientInfo from "./components/clientInfo/ClientInfo";
import CardInfo from "./components/clientInfo/cardInfo/CardInfo";
import Account from "./components/account/Account";
import SearchBar from "./components/search/SearchBar";

function App() {
  const dispatch = useDispatch();
  const store = useStore();

  const userStore = useSelector((state) => state);
  const [tour, setTour] = useState([]);
  const [trigger, setTrigger] = useState(0);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [role, setRole] = useState("-");

  useEffect(() => {
    async function getToursAPI() {
      dispatch(getTours());
    }
    getToursAPI();

    if (trigger) {
      setUser(userStore.user.user.user);
      if (user !== null && user !== undefined) {
        setIsAuth(true);
        setRole(user.role);
        console.log(user.role);
      }
    }
  }, [tour, userStore.user.user]);

  return (
    <div>
      <NavBar setTrigger={setTrigger} isAuth={isAuth} trigger={trigger} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/tours"
          element={user.role === "ADMIN" ? <SideBarMenu /> : <Tours />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/tour-work" element={<Admin />} />
        <Route path="/dashboard" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/tour/details" element={<DetailsTour />} />
        <Route path="/tour/details/buy" element={<ClientInfo />} />
        <Route path="/buy/tour/validation" element={<CardInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


/*

:

                            (<div className="dropdown open">
                             <Link id="RouterNavLink" to='/account' className='text-decoration-none'> 
                                <a className="bg-dark text-decoration-none text-white p-1" 
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true" 
                                    aria-expanded="false"
                                    id="triggerId">
                                    <i className="bi bi-person-circle"></i> 
                                        <span className="ms-2 d-none d-sm-inline">
                                            Isma
                                        </span>
                                </a>
                            </Link>  
                            </div>)
*/