import React from 'react'
import jossimar from "./assets/tony2.jpeg"
import Contador from './Contador'

const Card = () => {
  return (
    <div>
      <Contador/>
      <h1 className='titulo'>aca hagan la cartilla</h1>
      <img src={jossimar} alt="" />
    </div>
  )
}

export default Card
