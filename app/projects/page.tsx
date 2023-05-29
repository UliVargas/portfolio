const ProjectsPage = async () => {
  const data = await getRepos();
  return (
    <>
      <h1>Página de proyectos</h1>
      <ul>
        {data.map((repo: any) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsPage;

const getRepos = async () => {
  const res = await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  return res.json();
};
