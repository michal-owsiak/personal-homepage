import { useState, useEffect } from "react";
import { sortAndFilterProjects } from "./sortAndFilterProjects";

export const useSortedAndFilteredProjects = () => {
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

  return { projects, loading, error};
};