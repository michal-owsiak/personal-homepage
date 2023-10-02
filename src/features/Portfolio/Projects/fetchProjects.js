import axios from "axios";
import { API } from "../../../copy";

export const fetchProjects = async () => {
  try {
    const response = await axios.get(API); 
    const reposArray = response.data
    return reposArray;
  } catch (error) {
    console.error("Error while fetching the data from GitHub API");
  }
};