import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center w-full bg-gray-100/40 h-screen flex-col space-y-2'>
        <h1 class="uppercase font-extrabold leading-none tracking-tighter text-gray-600 text-2xl dark:text-white">Grocers</h1>
      <div className='w-1/3 bg-gray-50 shadow-sm shadow-black/5 rounded-lg h-min p-2'>
        <div className='bg-white h-min w-full space-y-4 text-center flex items-center flex-col p-4'>
            
            <p className='text-gray-800 text-md font-bold uppercase'>SignUp</p>
            
            <span className='border-y-[1px] py-4 border-dashed'>
            <p className='text-gray-800 text-[10px] font-semibold uppercase'>By login, I agree the Grocers <span className='text-blue-500'>privacy policy</span> and <span className='text-blue-500'>terms and conditions</span>.</p>
            </span>

            <span className='w-full block space-y-4 border-b-[1px] pb-4 border-dashed'>
            <label htmlFor="email" className='text-left w-full space-y-2'>
                <p className='text-gray-400 text-[10px]'>Email</p>
                <input type="text" className='w-full text-[12px] outline-none outline-blue-500/20 focus:outline-blue-500/40 outline-2 duration-500 p-2 rounded-sm' name="" id="email" placeholder='Enter your email' />
            </label>

            <button type="button" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-[3px] focus:ring-blue-300 uppercase font-semibold rounded-md text-sm p-3 shadow-inner text-center ">Login</button>
            </span>

            <span className='w-full block space-y-2'>
            <button type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-200 w-full flex space-x-2 items-end justify-center">
                {/* <i className='bx bxl-apple'></i> */}
                <p className='font-semibold text-[12px] capitalize'>Continue with apple</p>
            </button>

            <button type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-200 w-full flex space-x-2 items-end justify-center">
                {/* <i className='bx bxl-apple'></i> */}
                <p className='font-semibold text-[12px] capitalize'>Continue with google</p>
            </button>
            </span>

        </div>
        <p className='p-2 text-[12px] font-medium text-slate-500'>Question? Need a hand?</p>
      </div>
    </div>
  )
}

export default Login
