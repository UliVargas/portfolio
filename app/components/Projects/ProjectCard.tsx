import { FC } from 'react'

import { Publication } from '~/routes/projects'

interface Props {
  publications: Publication[]
}

export const ProjectCard: FC<Props> = ({ publications }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 w-[1200px]">
        {publications.map(({ id, title, body }) => (
          <div className="shadow-md w-[300px] p-4" key={id}>
            <h4 className="font-semibold text-lg">{title}</h4>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </>
  )
}
