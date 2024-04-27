import axios from "axios";

const publicAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export default publicAPI;