import ProjectsData from '~/utils/mocks/projects.json'
import { ProjectCard } from '~/components/Projects/ProjectCard'

const Projects = () => {
  return (
    <section className="lg:w-[1200px] mx-auto py-10">
      <ProjectCard projects={ProjectsData} />
    </section>
  )
}

export default Projects
