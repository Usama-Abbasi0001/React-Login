import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { database  } from './Firebaseconfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
function Login() {
  const navigate= useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value

    createUserWithEmailAndPassword(database,email,password).then(data=>{
      console.log(data,"authData")
      navigate("/home")
      alert("Login Successfully")
    })
  }
  
  return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="w-[500px] mx-auto border rounded-[10px] mt-[8rem] p-4 flex flex-col justify-center items-center bg-slate-200">
    <div className='text-[50px] font-bold text-center w-[450px] text-green-800'>Login</div>
        <div>
        <input name='email' type="text" placeholder='Email or phone number' className="border w-[450px] py-2 ps-2 mt-[1rem]" />
        </div>
        <div>
        <input name='password' type="password" placeholder='Password' className="border w-[450px] mt-[1rem] py-2 ps-2" />
        </div>
        <div>
            <button className='bg-blue-600 text-white hover:bg-white hover:text-black w-[450px] mt-[1rem] py-2  rounded-[6px] font-bold'>Login</button>
        </div>
        <div><hr  className='w-[400px] mx-auto mt-[2rem]' /></div>
        <Link to="/signup" className='w-[300px]  mx-auto bg-green-400 font-bold rounded-[20px] text-white text-center py-3 mt-[2rem] cursor-pointer hover:bg-green-600'>Create New Account</Link>
      </div>
      </form>
    </>
  )
}

export default Login;
