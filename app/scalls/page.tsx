import axios, {AxiosResponse, AxiosError} from 'axios'
import React from 'react'
import User from '../components/User';
import { IUsers } from '../types/types';

const getRes = async () => {
  const url: string = 'https://jsonplaceholder.typicode.com/todos'
  const res: AxiosResponse<IUsers[]> = await axios.get(url);
  return res.data;
}

async function Scalls() {
  const data: IUsers[] = await getRes();

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>Parent
    {
      data?.map((user: IUsers) => (
        <>
        <User key={user.id} {...user} />
        </>
      ))
    }
  </div>
  )
}

export default Scalls