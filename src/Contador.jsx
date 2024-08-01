import React from 'react'
import { useState } from 'react'

const Contador = () => {

 const [count,setCount] =useState(10)


  return (
    <div>
      <p>has click aca {count} veces</p>
      <button onClick={()=>setCount(count + 1)}>incrementa</button>
      <button onClick={()=>setCount(0)}>reset</button>
      <button onClick={()=>setCount(count - 1)}>decrementa</button>
    </div>
  )
}

export default Contador
