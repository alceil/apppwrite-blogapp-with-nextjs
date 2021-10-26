
import Link from 'next/link'
import { useState } from "react";
import api from '../api/api';
import { ToastContainer,toast } from "react-toastify";
import { useRouter } from 'next/router'
const Login=()=>{
    const router = useRouter();

const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
      });

const  loginUser = async (e)=>{
e.preventDefault();
if(userDetails.email && userDetails.password){
    try {
    await api.createSession(userDetails.email,userDetails.password);
    router.push('/home');
    
} catch (error) {
    toast.error(`${error.message}`);
}
}
else{
    toast.error('Fill out the details first!');
}
}     

return(
    <div>
    <h2 className="mt-5 text-center">Blog App</h2>
    <h3 className=" text-center">Login</h3>
    <form className="container">
      <div className="mb-3">
        <label className="form-label">
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
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Password
        </label>
        <input
          onChange={(e) => {
            setUserDetails({
              ...userDetails,
              password: e.target.value,
            });
          }}
          type="password"
          name="password"
          required
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <span>First time here ? </span>
        <Link href="/" passHref>
          <button className="btn btn-primary mx-1">Signup</button>
        </Link>
      </div>
      <div>
        <span>Forget password ? </span>
        <button className="btn btn-danger mx-1">Forget Password</button>
      </div>

   <Link href="/home" passHref>
   <button
        type="submit"
        onClick={(e) => loginUser(e)}
        className="btn btn-success"
      >
        Login
      </button>
   </Link>
    </form>

    
  </div>
);
}


export default Login;