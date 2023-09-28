import github from "./github.svg"
import {
  StyledPortfolio,
  Wrapper,
  GitHubIcon,
  Header,
  Subheader,
  Projects,
} from "./styled";

const Portfolio = () => (
  <StyledPortfolio>
    <Wrapper>
      <GitHubIcon src={github} />
      <Header>Portfolio</Header>
      <Subheader>My recent projects</Subheader>
    </Wrapper>
    <Projects />
  </StyledPortfolio>
);

export default Portfolio;