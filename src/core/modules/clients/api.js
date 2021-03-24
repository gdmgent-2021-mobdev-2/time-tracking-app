import { createHeaders } from '../../utils/api';

const fetchClients = () => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/clients`, {
        headers: createHeaders(headers),
    });
};

const fetchClient = (id) => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/clients/${id}`, {
        headers: createHeaders(headers),
    });
};

const createClient = (data) => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/clients`, {
        method: 'POST',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
};

const updateClient = (data) => (headers) => {
    const { _id } = data;
    return fetch(`${process.env.REACT_APP_BASE_API}/clients/${_id}`, {
        method: 'PATCH',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
};

export { fetchClients, fetchClient, createClient, updateClient };
