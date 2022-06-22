import axios from 'axios';

const baseUrl = '/api/persons';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const create = newPersons => {
    const request = axios.post(baseUrl, newPersons);
    return request.then(response => response.data);
}

const update = (id, newPersons) => {
    const request = axios.put(`${baseUrl}/${id}`, newPersons);
    return request.then(response => response.data);
}

const deletePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, deletePerson }