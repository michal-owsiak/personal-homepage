import {
  StyledProjectTile,
  Name,
  Description,
} from "./styled";
import Links from "./Links"

const ProjectTile = ({ name, description, demo, code }) => (
  <StyledProjectTile>
    <Name>{name}</Name>
    <Description>{description}</Description>
    <Links 
      demoLink={demo}
      codeLink={code}
    />
  </StyledProjectTile>
);

export default ProjectTile;