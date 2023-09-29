import React, { useState, useEffect } from "react";
import { StyledProjects } from "./styled";
import ProjectTile from "./ProjectTile";
import Loading from "./Loading";
import { sortProjects } from "./sortProjects";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await sortProjects();
          setProjects(response);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      }, 1000);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading projects</div>;
  }

  return (
    <StyledProjects>
      {projects.map((project) => (
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
