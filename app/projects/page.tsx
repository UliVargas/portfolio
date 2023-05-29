import { Repo } from '@/models/repo'

const getRepos = async () => {
  return fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  }).then(resp => resp.json())
}

const ProjectsPage = async () => {
  const data: Repo[] = await getRepos()

  console.log(data)

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
