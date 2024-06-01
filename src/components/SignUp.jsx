import React from 'react'
import { useNavigate } from 'react-router-dom';


function SignUp() {
const navigate = useNavigate();
function gotologin(){
  navigate("/")
}
  return (
    <>
    <form>
       <div className="w-[500px] mx-auto border rounded-[10px] mt-[8rem] p-4 flex flex-col justify-center items-center bg-slate-300">
    <div className='text-[50px] font-bold text-center w-[450px] text-green-800'>Sign Up</div>
    <div>
    <div className='flex space-x-12'>
        <input name='fast' type="text" placeholder='Fast name' className="border w-[200px] py-2 ps-2 mt-[1rem]" />
        <input name='last' type="text" placeholder='Last name' className="border w-[200px] py-2 ps-2 mt-[1rem]" />
        </div>
    </div>
        <div>
        <input name='email' type="text" placeholder='Email or phone number' className="border w-[450px] py-2 ps-2 mt-[1rem]" />
        </div>
        <div>
        <input name='password' type="password" placeholder='Password' className="border w-[450px] mt-[1rem] py-2 ps-2" />
        </div>
        <div>
            <button className='bg-blue-600 text-white hover:bg-white hover:text-black w-[450px] mt-[1rem] py-2  rounded-[6px] font-bold'>Sign UP</button>
        </div>
        <div><hr  className='w-[400px] mx-auto mt-[2rem]' /></div>
        <div onClick={gotologin} className=' cursor-pointer text-blue-900 font-bold underline hover:text-black mt-[2rem]'>Already have an account</div>
      </div>
      </form>
    </>
  )
}

export default SignUp;
