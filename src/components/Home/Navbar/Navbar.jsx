import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Authintication/AuthProvider";

const Navbar = () => {
  const { userr: user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("log out succecfullly"))
      .catch((err) => console.log(err));
  };

  const navLink = (
    <>
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
        to="/myCart"
      >
        <button className="btn btn-ghost">My Cart</button>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 mt-6 mb-4 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <img src="/logo.png" alt="" className="w-36 mx-2" />
        </div>
        <div className="navbar-center hidden lg:flex">{navLink}</div>

        {/* <div onSubmit={handleLogOut} className="navbar-end">
          <NavLink to='/login' className="btn">Login</NavLink>
        </div> */}

        {user ? (
          <>
            <NavLink onClick={handleLogOut} to="/login">
              <button className="btn btn-outline btn-sm btn-error">
                Log out
              </button>
            </NavLink>
          </>
        ) : (
          <NavLink className="navbar-end" to="/login">
            <button className="btn">Login</button>
          </NavLink>
        )}

        {user && (
          <>
            <span className="lg:ml-2 mr-2">{user.email}</span>
            <div className="w-10  rounded-full">
              <img src={user.photoURL} alt="User Pic" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
