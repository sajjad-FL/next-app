'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function RouterTwoPage() {
  const router = useRouter();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
     //it is use to move back
    //  router.back();
     router.push('/routersall/router-three')
  }

  return (
    <div>
        <h1>RouterTwoPage</h1>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda sequi facere quaerat at modi sit architecto hic, laborum repudiandae eligendi porro corrupti tempore recusandae laudantium itaque esse fuga quo.</div>
        <button onClick={handleClick}>Click To move Router 3 page</button>
    </div>
  )
}

export default RouterTwoPage