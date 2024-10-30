import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/student/lista';

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL);
}