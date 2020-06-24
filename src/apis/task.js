import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constants";

const url = "product-card";

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
