'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

function RouterOnePage() {
  const router = useRouter();
  
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
      console.log("clicked")
      router.push('/routersall/router-two');
  }
  
  return (
    <div>
        <h1>RouterOnePage</h1>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda sequi facere quaerat at modi sit architecto hic, laborum repudiandae eligendi porro corrupti tempore recusandae laudantium itaque esse fuga quo.</div>
        <button onClick={handleClick}>Click To move Router 2 page</button>
    </div>
  )
}

export default RouterOnePage