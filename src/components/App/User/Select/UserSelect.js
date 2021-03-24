import React, { useEffect, useState } from 'react';
import useAuthApi from '../../../../core/hooks/useAuthApi';
import { fetchUsers } from '../../../../core/modules/users/api';
import Select from '../../../Design/Select';

const UserSelect = (props) => {
    const withAuth = useAuthApi();

    const [users, setUsers] = useState();

    useEffect(() => {
        withAuth(fetchUsers())
            .then((data) => {
                setUsers(data);
            })
            .catch((e) => {
                // todo
                console.log(e);
            });
    }, [withAuth]);

    const options = users
        ? users.map((c) => ({ value: c._id, label: c.name }))
        : null;

    return <Select options={options} {...props} />;
};

export default UserSelect;
