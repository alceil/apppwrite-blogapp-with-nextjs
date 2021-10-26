import Link from 'next/link'
import { useState } from "react";
import api from '../api/api';
import { ToastContainer,toast } from "react-toastify";
import { useRouter } from 'next/router'
const SignUp=()=>{
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
      });

      const router = useRouter();
const signupUser= async (e)=>{
    e.preventDefault();
    if(userDetails.email&&userDetails.name&&userDetails.password)
    {
        console.log(userDetails);
try {
    await api.createAccount(userDetails.email,userDetails.password,userDetails.name);

    router.push('/home');
    
} catch (error) {
    // console.log(error);
    toast.error(`${error.message}`)
}

    }else{
        toast.error('Fill out the details first!');
    }
}


    return( <>
    <div>
        <h2 className="mt-5 text-center">Blog App</h2>
        <h3 className=" text-center">Signup</h3>
  
        <form className="container">
          <div className="mb-3">
            <label  className="form-label">
              Name
            </label>
            <input
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  name: e.target.value,
                });
              }}
              type="text"
              className="form-control"
              id="name"
              required
              aria-describedby="name"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  email: e.target.value,
                });
              }}
              type="email"
              className="form-control"
              id="email"
              required
              aria-describedby="email"
              name="password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  password: e.target.value,
                });
              }}
              required
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <div className="mb-3">
            <span>Already have an account ? </span>{" "}
            <Link href ="/login" passHref>
              <button className="btn btn-primary">Login</button>
            </Link>
          </div>
          <button
            onClick={(e) => signupUser(e)}
            type="submit"
            className="btn btn-success"
          >
            Signup
          </button>
        </form>  
      </div>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </>
      
      );
}

export default SignUp;