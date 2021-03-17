import useFetch from '../../../../core/hooks/useFetch';
import Spinner from '../../../Design/Spinner';
import Alert from '../../../Design/Alert';
import { fetchClients } from '../../../../core/modules/clients/api';
import { Link } from 'react-router-dom';
import { route, Routes } from '../../../../core/routing';
import useAdmin from '../../../../core/hooks/useAdmin';

const ClientsOverview = () => {
    const {
        data: clients,
        error,
        isLoading
    } = useFetch(fetchClients);

    const admin = useAdmin();

    if (isLoading) {
        return <Spinner/>;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }

    return (
        <>
            <h1>Clients</h1>

            {admin &&
                <Link to={Routes.ClientsNew}>Create client</Link>
            }

            <ul>
                {clients.map((client) => (
                    <li key={client._id}>
                        <Link to={route(Routes.ClientsDetail, { id: client._id })}>
                            {client.company}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )

};

export default ClientsOverview;
