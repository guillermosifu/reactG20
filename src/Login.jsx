import React, { useContext, useState } from 'react'




const Login = () => {
 const[username,setUsername]=useState("");
 const[password,setPassword]=useState("")

 const handleLogin=()=>{
    localStorage.setItem("user",username)
    localStorage.setItem("pass",password)
 }

 const handleDelete =()=>{
    localStorage.removeItem()
 }


  return (
    <div>
      <h2>LOGIN</h2>
      <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='ingresa usuario' />
      <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='ingresa contraseña' />
      <button onClick={handleLogin}>Inicia sesion</button>
      <div>
        <p>User:{username}</p>
        <p>password:{password}</p>
      </div>
      <button onClick={handleDelete}>CERRAR SESION</button>
    </div>
  )
}

export default Login
