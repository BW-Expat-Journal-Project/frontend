import axios from "axios";
import { storageKeyToken } from '../config'

export const axiosWithAuth = () => {
  const token = sessionStorage.getItem(storageKeyToken);

  // return an instance of axios
  return axios.create({
    baseURL: 'https://bw-expat-journal-web.herokuapp.com/api/',
    headers: {
      Authorization: token
    }
  })
}

export default axiosWithAuth;