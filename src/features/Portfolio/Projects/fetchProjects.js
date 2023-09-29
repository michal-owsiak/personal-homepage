import axios from "axios";
import { API } from "../../../copy";

export const fetchProjects = async () => {
  try {
    const response = await axios.get(API); 
    const reposArray = response.data
    return reposArray;
  } catch (error) {
    console.error(error);
    return new Error(error).statusText;
  }
};