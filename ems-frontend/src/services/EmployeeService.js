import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/student/lista';

const REST_API_BASE_URL2 = 'http://localhost:8080/student';
export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL);
}

export const createEmployee = (employee) => {
    return axios.post(REST_API_BASE_URL2, employee)
}