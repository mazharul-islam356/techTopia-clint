import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Authintication/AuthProvider";
import { BiLogOut } from "react-icons/bi";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("log out succecfullly"))
      .catch((err) => console.log(err));
  };

  const navLink = (
    <div >
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-blue-400 underline p-4" : ""
        }
        type="radio"
        to="/"
      >
        <button className="btn btn-ghost">Home</button>
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-blue-400 underline p-4" : ""
        }
        to="/addProduct"
      >
        <button className="btn btn-ghost">Add Product</button>
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-blue-400 underline p-4" : ""
        }
        to="/cart"
      >
        <button className="btn btn-ghost">My Cart</button>
      </NavLink>
    </div>
  );
  return (
    // <div className="navbar bg-base-100 shadow-xl mt-4">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         {navLink}
    //       </ul>
    //     </div>
    //     <img src="/logo.png" alt="" className="w-36 mx-2" />
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">{navLink}</ul>
    //   </div>
    //   <div className="navbar-end">
    //     {/* theme */}

    //     <div className="ml-96 mr-4 text-xs">
    //       <label className="swap swap-rotate">
    //         <input type="checkbox" onChange={handleToggle} />

    //         <svg
    //           className="swap-on fill-current w-10 h-10"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
    //         </svg>

    //         <svg
    //           className="swap-off fill-current w-10 h-10"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
    //         </svg>
    //       </label>
    //     </div>

    //     {user ? (
    //       <div className="relative left-64 lg:left-0">
    //         <NavLink onClick={handleLogOut} to="/login">
    //           <button className="btn btn-outline btn-sm btn-error">
    //             Log out
    //           </button>
    //         </NavLink>
    //       </div>
    //     ) : (
    //       <NavLink className="navbar-end " to="/login">
    //         <button className="btn">Login</button>
    //       </NavLink>
    //     )}

    //     {user && (
    //       <div className="relative flex top-6">
    //         {/* <span className="lg:ml-2  mr-2">{user.email}</span> */}
    //         <div className=" rounded-full lg:mr-4 mb-6">
    //           <img src={user.photoURL} alt="Photo" />
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>



  <div className="shadow-lg mb-4">
    <div className="navbar w-11/12 mx-auto bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex="0"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLink}
      </ul>
    </div>
    <Link to='/' className="flex items-center">
    <img className="w-8" src="https://i.ibb.co/7nzVmh1/pngwing-com-21.png" alt="" />
    <a className="text-xl relative right-1 top-0.5 font-sans font-semibold">echTopia</a>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLink}
    </ul>
  </div>
  <div className="navbar-end">

  <div className="mr-4">
           <label className="swap swap-rotate">
             <input type="checkbox" onChange={handleToggle} />

             <svg
               className="swap-on fill-current w-10 h-10"
               xmlns="http:www.w3.org/2000/svg"
               viewBox="0 0 24 24"
             >
               <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
             </svg>

             <svg
               className="swap-off fill-current w-10 h-10"
               xmlns="http:www.w3.org/2000/svg"
               viewBox="0 0 24 24"
             >
               <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
             </svg>
           </label>
         </div>
       {user ? (
          <div className="relative left-64 lg:left-0">
            <NavLink onClick={handleLogOut} to="/login">
              <button className="border hover:bg-red-500 transition-all hover:text-white flex items-center gap-1 text-red-500 p-2 px-4 rounded-lg font-semibold font-sans">
              <BiLogOut /> LogOut
              </button>
            </NavLink>
          </div>
        ) : (
          <NavLink className="navbar-end " to="/login">
            <button className="border hover:bg-green-500 transition-all hover:text-white flex items-center gap-1 text-green-500 p-2 px-4 rounded-lg font-semibold font-sans">
            <MdLogin />
              Login</button>
          </NavLink>
        )}
  </div>
</div>
  </div>
  );
};

export default Navbar;
