import { useState, useEffect } from 'react';
import Select from '../../../Design/Select';
import useAuthApi from '../../../../core/hooks/useAuthApi';
import { fetchClients } from '../../../../core/modules/clients/api';

const ClientSelect = (props) => {
    const withAuth = useAuthApi();

    const [clients, setClients] = useState();

    useEffect(() => {
        withAuth(fetchClients())
            .then((data) => setClients(data))
            .catch((error) => {
                // todo
            });
    }, [withAuth]);

    const options = clients
        ? clients.map((c) => ({ value: c._id, label: c.company }))
        : null;

    return <Select options={options} {...props} />;
};

export default ClientSelect;
