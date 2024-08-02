import { useEffect } from 'react'
import { useState } from 'react'
import useGithub from './hooks/useGithub'

const ApiGit = () => {
    const [search, setSearch] = useState("")
    const [repos, setRepos] = useState([])
    const [user, setUser] = useState({})

    const { getUser, getRepositories } = useGithub(search)

    const handleUser = async () => {
        const data = await getUser()
        const repositories = await getRepositories()
        // console.log(repositories)
        
        // guardamos el usuario
        setUser(data)

        // guardamos los repositorios
        setRepos(repositories)
    }

    useEffect(() => {
        const getPokemons = async () => {
            const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await pokemons.json()
            console.log(data)
        }

        getPokemons()
    }, [])

  return (
    <div>
      <div>
        <h1>Buscar Usuarios</h1>
        <div>
            <input onChange={(event)=>setSearch(event.target.value)} type="text" placeholder='ingresa usuario'/>
        </div>
        <div>
            <button onClick={ () => { handleUser() } }>Buscar</button>
        </div>
        <article>
            <div>
                <img src={user.avatar_url} alt="" />
                <h4 >{user.login}</h4>
                <p>{user.bio}</p>
                <span>{user.public_repos}</span>
                <p>{user.name}</p>
            </div>

            {
                repos.map(r => (
                    <div key={ r.id } className='repo'>
                        <h2>{ r.name }</h2>
                        <a href={r.html_url}>Repo link</a>
                    </div>
                ))
            }
        </article>
      </div>
    </div>
  )
}

export default ApiGit
