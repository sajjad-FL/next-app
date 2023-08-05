import axios, {AxiosResponse, AxiosError} from 'axios'
import React from 'react'
import User from '../components/User';

async function Scalls() {
  // const data: any[] = await getRes();
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>Parent
    {
      data?.map((user: any) => (
        <>
        <User key={user.id} {...user} />
        </>
      ))
    }
  </div>
  )
}

export default Scalls