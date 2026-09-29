import { Link } from "react-router-dom";


function SignUp(){
    return(
    <div className="min-h-screen flex items-center justify-center">
    <div class="container w-[450px] bg-gray-100 p-10 rounded-md">
        <h1 className="text-center text-5xl text-red-700 mb-16 font-bold font-lobster">Sign Up!</h1>
        <div className="text">
        <input className="w-full px-5 py-3 my-2 inline-block border border-gray-300 box-border rounded" type="text" placeholder=" Username" name="uname" required />
        </div>
        <div className="mail">
        <input className="w-full px-5 py-3 my-2 inline-block border border-gray-300 box-border rounded" type="email" placeholder=" Email" name="uname" required />
        </div>
        <div className="password">
        <input className="text-white px-5 py-3.5 my-2 border box-border border-gray-300  w-full rounded" type="password" placeholder=" Password" name="psw" required />
        </div>
        <div className="flex items-center">
        <p className="text-xl text-gray-700 cursor-pointer mb-14 mt-16 items-center text-center" >
          Already a member?
        </p>
        <Link
          to="/contact"
          className="text-xl text-gray-700 cursor-pointer mb-14 mt-16 items-center text-center" >
          Login?
        </Link>
        </div>
        <button className="bg-red-700 text-white px-5 py-3.5 my-2 border-0 cursor-pointer w-full rounded" type="submit">Sign Up</button>
    </div>
    </div>
    )
}

export default SignUp;