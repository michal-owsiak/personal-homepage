import React, { useState, useEffect } from "react";
import { StyledProjects } from "./styled";
import ProjectTile from "./ProjectTile";
import Loading from "./Loading";
import Error from "./Error";
import { sortAndFilterProjects } from "./sortAndFilterProjects";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sortAndFilterProjects();
        setProjects(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    const fetchDataTimeout = setTimeout(fetchData, 1000);

    return () => clearTimeout(fetchDataTimeout);
  }, []);

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
