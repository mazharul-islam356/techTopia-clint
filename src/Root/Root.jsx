import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto"> 
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;