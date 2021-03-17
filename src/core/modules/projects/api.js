import { createHeaders } from '../../utils/api';

const fetchProjects = () => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/projects`, {
        headers: createHeaders(headers),
    });
};


const fetchProject = (id) => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/projects/${id}`, {
        headers: createHeaders(headers),
    });
};

const createProject = (data) => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/projects`, {
        method: 'POST',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
};

const updateProject = (data) => (headers) => {
    const { _id } = data;
    return fetch(`${process.env.REACT_APP_BASE_API}/projects/${_id}`, {
        method: 'PATCH',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
};

export {
    fetchProjects,
    fetchProject,
    createProject,
    updateProject,
}
