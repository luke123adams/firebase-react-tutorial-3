import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/Authcontext'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const { createUser } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {
            if (password === confirmPassword) {
            await createUser(email, password)}
            else {
                setError('Passwords do not match')
                console.error(error)
            }

        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }


    return (

    <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>
         <h1 className='text-2xl font-bold py-2'>Create an account</h1>
            <p className='py-2'>
                Already have an account? <Link to='/' className='underline'>Sign in</Link>
            </p>
            <p>{error}</p>
         </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'> Email Address</label>
            <input onChange={(e)=> setEmail(e.target.value)} className='border p-3' type="email" label='email' name='email'/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password</label>
            <input onChange={(e)=> setPassword(e.target.value)} className='border p-3' type='password' label='password' name='password'/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Confirm password</label>
            <input onChange={(e)=> setConfirmPassword(e.target.value)} className='border p-3' type='password' name='confirm password' label='confirm password'/>
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign up</button>
        </form>
    </div>
    )
}

export default Signup