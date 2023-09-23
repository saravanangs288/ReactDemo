import React from 'react'
import { useState } from 'react'
export default function Component() {
    const[value,setValue]=useState(0)
    const count=()=>{
        setValue(value+1);
    }
  return (
    <div>
        <p>Count:{value} </p>
        <button onClick={count}>Click Here</button>
    </div>
  )
}
