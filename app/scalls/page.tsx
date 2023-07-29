import axios, {AxiosResponse, AxiosError} from 'axios'
import React from 'react'
import User from '../components/User';
import { emailQueue } from '../api/queues/route';

const getRes = async () => {
  const url: string = 'https://jsonplaceholder.typicode.com/todos'
  const res: AxiosResponse<any[]> = await axios.get(url);
  return res.data;
}

async function Scalls() {
  const data: any[] = await getRes();

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