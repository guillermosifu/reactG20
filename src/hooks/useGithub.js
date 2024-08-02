const API_GITHUB = 'https://api.github.com/users'

const useGithub = (username) => {
    const getUser = async () => {
        try {
            const response = await fetch(`${API_GITHUB}/${username}`)
            const data = await response.json()

            return data
        } catch (error) {
            console.error(error.message)
        }
    }

    const getRepositories = async () => {
        try {
            const repositories = await fetch(`${API_GITHUB}/${username}/repos`)
            const data = await repositories.json()

            return data
        } catch (e) {
            console.error(e.message)
        }
    }

    return {
        getUser, getRepositories
    }
}

export default useGithub