import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate =useNavigate();
    function loginpage(){
navigate("/")
    };
  return (
    <>
      <div className='text-[50px] font-bold text-center text-blue-800 mt-[10rem] '>Starting A  Web Home Page </div>
      <div className='flex justify-center items-center'><button onClick={loginpage} className='bg-blue-400 text-white py-2 px-4 hover:bg-slate-400 font-bold hover:text-black
       rounded-[6px] mt-[3rem]'>Login Out</button></div>
    </>
  )
}

export default Home;
