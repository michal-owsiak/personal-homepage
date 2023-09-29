import { StyledProjects } from "./styled";
import ProjectTile from "./ProjectTile";

const Projects = ({ content }) => {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <StyledProjects>
      {content && content.map((project) => (
        <ProjectTile
          key={project.name}
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