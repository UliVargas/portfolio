import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'

import { Header } from '~/components/Sections/Header'

import { getAllRepos } from './models/repos.server'

const Projects = () => {
  const { repos } = useLoaderData<typeof loader>()

  return (
    <>
      <Header />
      <main>
        <h1>PROYECTOS</h1>
      </main>
    </>
  )
}

export const loader = async () => {
  return json({ repos: await getAllRepos() })
}

export default Projects
