import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import AddProduct from "../components/Add product/AddProduct";
import MyCart from "../components/MyCart/MyCart";
import Login from "../Authintication/Login/Login";
import Register from "../Authintication/Register/Register";
import Details from "../components/Details/Details";
import Update from "../components/Update/Update";
import PrivetRoute from "../privetRout/PrivetRoute";
import Error from "../Error";
import ProductCarddetails from "../components/Products/ProductCarddetails";





const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/brandData.json')
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            },{
                path:'/cart',
                element:<PrivetRoute><MyCart></MyCart></PrivetRoute>,
                loader:()=>fetch('https://assingment-10.vercel.app/cart')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            { 
                path:'/products/:id',
                element:<ProductCarddetails></ProductCarddetails>,
                loader: () => fetch('/brandData.json')
               
            },
            {
                path:'/details/:id',
                element:<PrivetRoute><Details></Details></PrivetRoute>,
                loader: () => fetch('https://assingment-10.vercel.app/products')
            },
            {
                path:'/update',
                element:<PrivetRoute><Update></Update></PrivetRoute>
            },
            // {
            //     path:'/products/:id',
            //     element:<AdData></AdData>,
            //     loader: () => fetch('/brandData.json')
            // }
           
            
            
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])

export default routes;