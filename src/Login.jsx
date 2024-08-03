import React, { useContext, useEffect, useState } from 'react'




const Login = () => {
 const[username,setUsername]=useState("");
 const[password,setPassword]=useState("")

  useEffect(()=>{
 const localUser = localStorage.getItem("user")
 const localPass = localStorage.getItem("pass")
 if(localUser && localPass){
 setUsername(localUser)
 setPassword(localPass)
 document.getElementById('info').innerHTML= `<p>Usuario:${localUser}</p><p>Password:${localPass}</p>`
 }
 
 },[])

 const handleLogin=()=>{
    localStorage.setItem("user",username)
    localStorage.setItem("pass",password)
    alert("datos guardados en local")
    document.getElementById('info').innerHTML=`<p>User:${username}</p><p>Pass:${password}`
 }

 const handleDelete =()=>{
    localStorage.removeItem("user")
    localStorage.removeItem("pass")
    setUsername("")
    setPassword("")
    alert("se cierra sesion")
    document.getElementById('info').innerHTML='';
 }



  return (
    <div>
      <h2>LOGIN</h2>
      <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='ingresa usuario' />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='ingresa contraseña' />
      <button onClick={handleLogin}>Inicia sesion</button>
      <div id='info'>
      </div>
      <button onClick={handleDelete}>CERRAR SESION</button>
    </div>
  )
}

export default Login
