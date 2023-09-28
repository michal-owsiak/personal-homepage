import github from "./github.svg"
import Projects from "./Projects";
import { projects } from "../../copy"
import {
  StyledPortfolio,
  Wrapper,
  GitHubIcon,
  Header,
  Subheader,
} from "./styled";

const Portfolio = () => (
  <StyledPortfolio>
    <Wrapper>
      <GitHubIcon src={github} />
      <Header>Portfolio</Header>
      <Subheader>My recent projects</Subheader>
    </Wrapper>
    <Projects content={projects}/>
  </StyledPortfolio>
);

export default Portfolio;