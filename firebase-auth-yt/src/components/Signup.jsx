import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (

    <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>
         <h1 className='text-2xl font-bold py-2'>Create an account</h1>
            <p className='py-2'>
                Already have an account? <Link to='/' className='underline'>Sign in</Link>
            </p>
         </div>
      <form>
        <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'> Email Address</label>
            <input className='border p-3' type="email" label='email' name='email'/>
        </div>
        <div>
            <label className='py-2 font-medium'>Password</label>
            <input className='border p-3' type='password' label='password' name='password'/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Confirm password</label>
            <input className='border p-3' type='password' name='confirm password' label='confirm password'/>
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign up</button>
        </form>
    </div>
    )
}

export default Signup