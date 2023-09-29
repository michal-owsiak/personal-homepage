import { useState, useEffect } from "react";
import { sortProjects } from "./Projects/sortProjects";
import github from "./github.svg"
import Projects from "./Projects";
import {
  StyledPortfolio,
  Wrapper,
  GitHubIcon,
  Header,
  Subheader,
} from "./styled";

const Portfolio = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects("loading");

    const timeoutId = setTimeout(() => {
      sortProjects()
        .then((sortedProjects) => {
          setProjects(sortedProjects);
        })
        .catch(() => {
          setProjects("error");
        });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <StyledPortfolio>
      <Wrapper>
        <GitHubIcon src={github} />
        <Header>Portfolio</Header>
        <Subheader>My recent projects</Subheader>
      </Wrapper>
      <Projects content={projects} />
    </StyledPortfolio>
  );
}

export default Portfolio;