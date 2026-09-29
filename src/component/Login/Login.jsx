import style from "./Login.module.css"
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login(){
    return(
    <div className="min-h-screen flex items-center justify-center">
    <div class="container w-[450px] bg-gray-100 p-10 rounded-md">
        <h1 className="text-center text-5xl text-red-700 mb-16 font-lobster">Login</h1>
        <div className="flex items-center">
        <FaUser/>
        <label for="uname"><b>Username</b></label>
        </div>
        <input className={style.input} type="text" placeholder="Enter Username" name="uname" required />
        <div className="flex items-center">
        <FaLock />
        <label for="uname"><b>Password</b></label>
        </div>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <div className="flex items-center">
        <p className="text-xl text-gray-700 cursor-pointer mb-14 mt-16 items-center text-center" >
          Forget Password?
        </p>
        <Link
          to="/signup"
          className="text-xl text-gray-700 cursor-pointer mb-14 mt-16 items-center text-center" >
           SignUp?
        </Link>
        </div>
        <button type="submit">Submit</button>
    </div>
    </div>
    )
}

export default Login;