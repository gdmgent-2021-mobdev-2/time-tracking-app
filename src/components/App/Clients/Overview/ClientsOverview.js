import useFetch from '../../../../core/hooks/useFetch';
import Spinner from '../../../Design/Spinner';
import Alert from '../../../Design/Alert';
import Button from '../../../Design/Button';
import { fetchClients } from '../../../../core/modules/clients/api';
import { Link } from 'react-router-dom';
import { Routes } from '../../../../core/routing';

const ClientsOverview = () => {
    const {
        data: clients,
        error,
        refresh,
        isLoading
    } = useFetch(fetchClients);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }

    return (
        <>
            <h1>Clients</h1>

            <Link to={Routes.ClientsNew}>Create client</Link>

            <ul>
                {clients.map((client) => (
                    <li key={client._id}>{client.company}</li>
                ))}
            </ul>
        </>
    )

};

export default ClientsOverview;
