import Projects from "./Projects";
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
      <GitHubIcon />
      <Header>Portfolio</Header>
      <Subheader>My recent projects</Subheader>
    </Wrapper>
    <Projects />
  </StyledPortfolio>
);

export default Portfolio;