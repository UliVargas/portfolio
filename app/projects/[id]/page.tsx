const ProjectPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <h1>Página de proyecto</h1>
      <h2 className='font-bold'>{params.id}</h2>
    </>
  )
}

export default ProjectPage