import { useState, useEffect } from "react";
import { fetchProjects } from "./Projects/fetchProjects";
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
      fetchProjects()
        .then((projects) => {
          setProjects(projects);
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