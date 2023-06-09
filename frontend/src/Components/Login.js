import React from 'react'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'


function Login() {

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-lime-400 text-2xl font-bold mt-5'>Leeyet Login</h1>
      <div className=" lg:w-1/2 text-center lg:shadow-md mt-10 p-10">
        <Input
          label="name"
          type="text"
          placeholder="Enter your name..."
        />
        <Input
          label="password"
          type="password"
          placeholder="Enter your password..."
        />
        <Button/>
      </div>
      <div className='lg:m-5 flex'>
          <h1 className=''>Dont have Account?</h1>
          <Link to='/registration'><h1 className='ml-2 text-lime-400 underline'>Click here...</h1></Link>
      </div>
    </div>
  )
}

export default Login
