import axios from 'axios'
import React from 'react'

async function StaticPage() {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
  console.log({data});
  return (
    <div>
        <h1>StaticPage</h1>
        <p>{data.title}</p>
        <p>{data.body}</p>
    </div>
  )
}

export default StaticPage;