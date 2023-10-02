import { StyledProjects } from "./styled";
import ProjectTile from "./ProjectTile";
import Loading from "./Loading";
import Error from "./Error";
import { useSortedAndFilteredProjects } from "./useSortedAndFilteredProjects";

const Projects = () => {
  const { projects, loading, error } = useSortedAndFilteredProjects();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <StyledProjects>
      {projects.map((project) => (
        <ProjectTile
          key={project.id}
          name={project.name}
          description={project.description}
          demo={project.homepage}
          code={project.html_url}
        />
      ))}
    </StyledProjects>
  );
};

export default Projects;
