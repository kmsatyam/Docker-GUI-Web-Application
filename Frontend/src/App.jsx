import React from "react";
import './index.css';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './container/manage_info/MainContainer';
import { BrowserRouter } from "react-router-dom";
import CreateContainer from "./container/create_container/CreateContainer";
import ManageContainer from "./container/manage_container/ManageContainer";
import ManageImages from "./container/manage_images/ManageImages";
import ManageNetwork from "./container/manage_network/ManageNetwork";
import ManageVolume from "./container/manage_volume/ManageVolume";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Error from './Error';
import Service from "./Service";
import Home from "./Home";
import About from './container/about_us/About';
import Contact from "./Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Logs from "./container/log/Logs";

const apiurl = 'http://192.168.179.48:5000';
//rafce

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                
                <Routes>
                    <Route exact path="/service" element={<Service apiurl={apiurl}/>}></Route>
                    <Route exact path="/about" element={<About apiurl={apiurl}/>}></Route>
                    <Route exact path="/contact" element={<Contact apiurl={apiurl}/>}></Route>
                    <Route exact path="/" element={<Home apiurl={apiurl} />}></Route>
                    <Route exact path="/root" element={<MainContainer apiurl={apiurl} />}></Route>
                    <Route exact path="/createcontainer" element={<CreateContainer apiurl={apiurl} />} ></Route>
                    <Route exact path="/managecontainer" element={<ManageContainer apiurl={apiurl} />} ></Route>
                    <Route exact path="/manageimage" element={<ManageImages apiurl={apiurl}/>} ></Route>
                    <Route exact path="/managenetwork" element={<ManageNetwork apiurl={apiurl}/>} ></Route>
                    <Route exact path="/managevolume" element={<ManageVolume apiurl={apiurl}/>} ></Route>
                    <Route exact path="/container_logs" element={<Logs apiurl={apiurl}/>}></Route>
                    <Route element={<Error />}></Route>     z     
                </Routes>
            {/* <Footer /> */}
            </BrowserRouter>
        </>
    );
}

export default App;