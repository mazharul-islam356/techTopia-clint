import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { FcGoogle } from 'react-icons/fc';


const Register = () => {

  const {REuser} = useContext(AuthContext)
  const {googleLogin} = useContext(AuthContext)

  const handleSubmit = (e) =>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    console.log(name,email,pass);
    if(pass.length < 6){
      toast.error('Password should be at least 6 characters')
      return
    }
     else if(!/[A-Z]/.test(pass)){
      toast.error('Please include at least one uppercase letter in your password')
      return
    }
    else if (!/[!@#$%^&*()_+\-=[{};':"|,.<>/?]+/.test(pass)){

      toast.error('Please include Special Characters in your password')
      return
    }


    REuser(email,pass)
    .then(result=>console.log(result.user))
    .catch(err=>console.log(err))

      
  }

  // google login
  const handleLogin = (media) => {
    media()
    .then(res=>console.log(res.user))
    .catch(err=>console.log(err))
  }



    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-semibold font-sans text-[#3abff8]">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body w-96 p-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="Password"
                className="input input-bordered"
                required
              />
             
            </div>
            <div className="form-control mt-6">
            <button onClick={()=> handleLogin(googleLogin)} className="btn mt-3 btn-sm mb-2 btn-accent btn-outline">
                  Continue With
                  <FcGoogle className="text-xl"></FcGoogle>
                </button>
              <button className="btn btn-info text-white btn-sm">Register</button>
            </div>
            <p>Allready have an account? Please <Link className="btn-link text-[#3abff8] font-bold" to='/login'>Login!</Link> </p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;