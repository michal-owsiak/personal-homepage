import { fetchProjects } from "./fetchProjects";

export const sortProjects = async () => {
try {
  const reposArray = await fetchProjects();
  const sortedReposArray = [...reposArray];
  
  sortedReposArray.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    return dateA - dateB;
  });

  return sortedReposArray;
} catch (error) {
  console.error(error);
  throw error;
}
};