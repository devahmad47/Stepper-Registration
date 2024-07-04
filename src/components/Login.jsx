import React from 'react'
import cover from "../../src/Assests/cover.png"
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';

const Login = ({next, prev}) => {
  return (
    <>
  <div className="flex justify-center px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <div className="absolute my-3">
        <button onClick={prev} className="btn ms-2 py-3">
          <BiArrowBack />
        </button>
    </div>
        <img className="w-full border-gray-400 border-b" src={cover} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 justify-center text-center">Setup Your Business Profile</div>
            <p className="text-gray-700 text-center text-xs text-custom-10">
            In publishing and graphic design . lorem ipsum is placeholder text commonly
            to demonstrate the visual form of
            </p>
        </div>
        <div className="px-6 py-4">
        <Link to='/Stepper/Form
        ' className="py-2 px-4 max-w-md flex justify-center items-center bg-[#07A6A9] text-white w-full transition ease-in duration-200 text-center text-sm font-light rounded-lg">
  Start Setup
</Link>
<Link to='/' className='flex text-bold font-bold uppercase text-custom-25 text-[#07A6A9] text-center justify-center'>Login</Link>
        </div>
    </div>
</div>
   
    </>
  )
}

export default Login
