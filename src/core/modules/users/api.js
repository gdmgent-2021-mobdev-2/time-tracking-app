import { createHeaders } from '../../utils/api';

const fetchUsers = () => headers => {
    return fetch(`${process.env.REACT_APP_BASE_API}/users`, {
        headers: createHeaders(headers)
    });
};

export { fetchUsers };
