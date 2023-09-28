import { StyledProjects } from "./styled";
import ProjectTile from "./ProjectTile";

const Projects = ({ content }) => (
  <StyledProjects>
    {content.map((project) => (
      <ProjectTile 
        key={project.name}
        name={project.name}
        description={project.description}
        demo={project.demo}
        code={project.code}
      />
    ))}
  </StyledProjects>
);

export default Projects;