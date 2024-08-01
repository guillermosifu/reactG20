import React from 'react'
import Button from './Button'
import { useState } from 'react'

const Contador = () => {

 const [count,setCount] =useState(0)


  return (
    <div>   
      <p>has click aca {count} veces</p>
      <button onClick={()=>setCount(count + 1)} >aumenta</button>
      <button onClick={()=>setCount(0)} >reset</button>
      <p>{count}</p>     
         
    </div>
  )
}

export default Contador
