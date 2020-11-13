import Axios from "axios";

export const axiosWithAuth = () => {
  return Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
};
