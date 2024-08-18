// import axios from "axios";
import axios from '../services/customize-Axios'

const fetchAllUser = () => {
    return axios.get('/api/users?page=1');
}

export {
    fetchAllUser
}