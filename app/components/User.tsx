"use client"
import React, { useEffect } from 'react'
import { IUsers } from '../types/types'
import Link from 'next/link';

function User(props: IUsers) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number): void => {
        e.stopPropagation();
        console.log({id})
      }

      useEffect(() => {
        // Function to handle any cleanup
        const handleCleanup = () => {
          console.log('Component unmounted. Cleanup logic here.');
        };
    
        // Attach the cleanup function to the 'beforeunload' event
        window.addEventListener('beforeunload', handleCleanup);
    
        return () => {
          // Remove the event listener when the component unmounts
          window.removeEventListener('beforeunload', handleCleanup);
        };
      }, []);
    
    return (
        <div className='flex px-2'>
            <Link href={`/props/${props.id}`}>
                <div>{props.id}</div>
                <div>{props.userId}</div>
                <div>{props.completed}</div>
                <div>{props.title}</div>
            </Link>
            <button onClick={(e) => handleClick(e, props.id)}>Get Val</button>
        </div>
    )
}

export default User