import { createHeaders } from '../../utils/api';

const fetchLogsByProject = (projectId) => (headers) => {
    return fetch(
        `${process.env.REACT_APP_BASE_API}/projects/${projectId}/logs`,
        {
            headers: createHeaders(headers),
        }
    );
};

const createLogByProject = (projectId, data) => (headers) => {
    return fetch(
        `${process.env.REACT_APP_BASE_API}/projects/${projectId}/logs`,
        {
            method: 'POST',
            headers: createHeaders(headers),
            body: JSON.stringify(data),
        }
    );
};

const updateLogByProject = (projectId, data) => (headers) => {
    const { _id } = data;
    return fetch(
        `${process.env.REACT_APP_BASE_API}/projects/${projectId}/logs/${_id}`,
        {
            method: 'PATCH',
            headers: createHeaders(headers),
            body: JSON.stringify(data),
        }
    );
};

export { fetchLogsByProject, createLogByProject, updateLogByProject };
