import axios from "axios";

export const axiosWithAuth = () => {
    const token = sessionStorage.getItem('token');

    // return an instance of axios
    return axios.create({
        baseURL: 'https://bw-expat-journal-web.herokuapp.com/api/',
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth;