import axios from "axios";
import { API } from "../../../copy";

export const fetchProjects = async () => {
  try {
    const response = await axios.get(API); 
    return response.data
  } catch (error) {
    return new Error(error).statusText;
  }
};