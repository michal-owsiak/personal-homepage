import { fetchProjects } from "./fetchProjects";
import { desiredProjectsIds } from "./desiredProjectsIds";

export const sortAndFilterProjects = async () => {
  try {
    const reposArray = await fetchProjects();
    const sortedReposArray = [...reposArray];

    sortedReposArray.sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);

      return dateA - dateB;
    });

    const filteredReposArray = sortedReposArray.filter((repo) => {
      return desiredProjectsIds.includes(repo.id);
    });

    return filteredReposArray;
  } catch (error) {
    console.error("No access to API database");
    throw error;
  }
};