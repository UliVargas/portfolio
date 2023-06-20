// eslint-disable-next-line camelcase
import type { V2_MetaFunction } from '@remix-run/node'

import ProjectsData from '~/utils/mocks/projects.json'
import { ProjectCard } from '~/components/Projects/ProjectCard'

// eslint-disable-next-line camelcase
export const meta: V2_MetaFunction = () => {
  return [{ title: 'Ulises Vargas - Proyectos' }]
}

const Projects = () => {
  return (
    <section className="lg:w-[1200px] mx-auto py-10">
      <ProjectCard projects={ProjectsData} />
    </section>
  )
}

export default Projects
