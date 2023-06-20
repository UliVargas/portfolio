import { FC } from 'react'

interface Technology {
  id: number
  name: string
}
interface Project {
  title: string
  description: string
  imgUrl: string
  technologies: Technology[]
}

interface Props {
  projects: Project[]
}

export const ProjectCard: FC<Props> = ({ projects }) => {
  return (
    <div className="w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row lg:flex-wrap gap-8">
      {projects.map(({ title, description, imgUrl, technologies }) => (
        <div
          className="flex flex-col justify-evenly border max-w-[378px] p-8 gap-4 transition-transform duration-300 hover:scale-[1.01] hover:cursor-pointer rounded-md relative overflow-hidden group"
          key={title}
        >
          <div className="border-b-4 border-[#127357] absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          <img
            src={imgUrl}
            alt="Project Image"
            className="rounded-full w-44 h-44 mx-auto border"
          />
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-[16px]">{description}</p>
          <div className="flex">
            <h4 className="font-semibold">Tecnologías utilizadas:</h4>
            <div className="flex flex-wrap gap-x-1">
              {technologies.map(({ id, name }) => (
                <p key={id}>{name}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
