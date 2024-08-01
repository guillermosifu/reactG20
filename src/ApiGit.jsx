import React from 'react'
import { useState } from 'react'

const ApiGit = () => {

const[search,setSearch]=useState("")
const[user,setUser]=useState({})

const fecthUser =async()=>{
    try{
     const response = await fetch(`https://api.github.com/users/${search}`)
    const data = await response.json()
       setUser(data)
    }catch(error){
        console.error("error".error.message)
    }
    

}
  return (
    <div>
      <div>
        <h1>Buscar Usuarios</h1>
        <div>
            <input onChange={(event)=>setSearch(event.target.value)} type="text" placeholder='ingresa usuario'/>
        </div>
        <div>
            <button onClick={fecthUser}>Buscar</button>
        </div>
        <article>
            <div>
                <img src={user.avatar_url} alt="" />
                <h4 >{user.login}</h4>
                <p>{user.bio}</p>
                <span>{user.public_repos}</span>
                <p>{user.name}</p>
            </div>
        </article>
      </div>
    </div>
  )
}

export default ApiGit
