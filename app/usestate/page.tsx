"use client"
import React, { useState } from 'react'

interface IUsers {
    id: number,
    name: string,
    password: string
}

function Logged(): JSX.Element {

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [details, setDetails] = useState<IUsers | null>(null)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setName(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleLogin = () => {
    setDetails({id: Math.random(), name, password});
  }

  details && alert(JSON.stringify({details}));
  return (
    <div>
      {
        details ? `You are looged In ${name}` :  <div>
        <div className='looded'>Login</div>
       <input type="text" placeholder='enter email' onChange={handleNameChange} />
       <input type="text" placeholder='enter password' onChange={handlePasswordChange} />
       <button onClick={handleLogin}> Submit </button>
  </div>
      }
    </div>
  )
}

export default Logged;