"use client"
import React, { useState } from 'react'

function Event(): JSX.Element {
  const [state, setState] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//      e.preventDefault();
//      console.log({state})
//   }

 const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
  console.log("clicked")
 } 
  return (
    // <form onSubmit={handleSubmit}>
    //     <input type="text" placeholder='enter name' onChange={handleChange} />
    //     <button type='submit'>Submit</button>
    // </form>
    <div>
        <input type="text" placeholder='enter name' onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Event