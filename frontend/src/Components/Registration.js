import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'

function Registration() {

  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [address,setAddress] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(username)
    const data = new FormData();

    data.append("username", username);
    data.append("password",password);
    data.append("file",selectedFile);

    const headers = {
      headers: {
          "Content-Type": "multipart/form-data",
        },
    }
}


  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-lime-400 text-2xl font-bold mt-5'>Leeyet Registration</h1>
      <form className=" lg:w-1/2 text-center lg:shadow-md mt-10 p-10" onSubmit={(e) => {handleSubmit(e)}}>
        <Input
          label="name"
          type="text"
          placeholder="Enter your name..."
          name="usename"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <Input
          label="password"
          type="password"
          placeholder="Enter your password..."
          name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Input
          label="address"
          type="text"
          placeholder="Enter your address..."
          name="address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />
        <Input
          name='file'
          onChange={(e)=>setSelectedFile(e.target.files[0])}
          label="Profile Image"
          type="file"
          placeholder="Select your profile Image..."
          value={selectedFile}
        />
        <Button/>
      </form>
      <div className='lg:m-5 flex'>
          <h1 className=''>Already have Account?</h1>
          <Link to='/'><h1 className='ml-2 text-lime-400 underline'>Click here...</h1></Link>
      </div>
    </div>
  )
}

export default Registration
