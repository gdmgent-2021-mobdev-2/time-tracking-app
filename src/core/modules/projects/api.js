import { createHeaders } from '../../utils/api';

const fetchProjects = () => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/projects`, {
        headers: createHeaders(headers),
    });
};

export {
    fetchProjects,
}
