import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div> 
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;