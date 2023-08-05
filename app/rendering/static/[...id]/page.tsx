import axios from 'axios';
import { notFound, useParams } from 'next/navigation'
import React from 'react'
export const revalidate = 0;  //get server side props
//or we can do in a particular api call 
// cache => no-cache

// {  next: { revalidate: 0 }  }

interface SinglePostPageProps {
    params: { id: number };
}

async function SinglePostPage({params: {id}}: SinglePostPageProps) {
//   const {id} = useParams();
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (res.status === 404) notFound();
  const data = await res.json()
  console.log({data});
  return (
    <div>
    <h1>Page {id}</h1>
     <div>
        <h1>StaticPage</h1>
        <p>{data.title}</p>
        <p>{data.body}</p>
    </div>
    </div>
  )
}

export default SinglePostPage;