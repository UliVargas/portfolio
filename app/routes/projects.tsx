import axios from 'axios'
import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'

import { Header } from '~/components/Sections/Header'
import { ProjectCard } from '~/components/Projects/ProjectCard'

export interface Publication {
  userId: number
  id: number
  title: string
  body: string
}

export const loader = async () => {
  return json({
    data: await axios
      .get<Publication[]>('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data)
  })
}

const Projects = () => {
  const { data } = useLoaderData<typeof loader>()
  return (
    <>
      <Header />
      <main className="mx-auto w-[1200px]">
        <h1 className="text-center font-bold text-4xl py-10">PROYECTOS</h1>
        <ProjectCard publications={data} />
      </main>
    </>
  )
}

export default Projects
