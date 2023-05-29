import axios from 'axios'

import { Repo } from '@/models/repo'

const getRepos = async () => {
  return axios.get<Repo[]>('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  })
}

const ProjectsPage = async () => {
  const { data } = await getRepos()
  return (
    <>
      <h1>Página de proyectos</h1>
      <ul>
        {data.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </>
  )
}

export default ProjectsPage
