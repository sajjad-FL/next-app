'use client';
import React from 'react'

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

function Error({ error, reset }: ErrorPageProps) {
  return (
    <div>
        <h1>Error</h1>
        <p>Something went wrong please try Again</p>
        <button onClick={reset}>Try Again</button>
    </div>
  )
}

export default Error