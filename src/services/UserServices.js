// import axios from "axios";
import axios from '../services/customize-Axios'

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

export {
    fetchAllUser
}