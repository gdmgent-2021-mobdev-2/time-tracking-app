import { createHeaders } from '../../utils/api';

const fetchClients = () => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/clients`, {
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

export {
    fetchClients,
    createClient,
}
