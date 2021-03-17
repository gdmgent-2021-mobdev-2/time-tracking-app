import useFetch from '../../../../core/hooks/useFetch';
import Spinner from '../../../Design/Spinner';
import { fetchClients } from '../../../../core/modules/clients/api';
import { Link } from 'react-router-dom';
import { route, Routes } from '../../../../core/routing';
import useAdmin from '../../../../core/hooks/useAdmin';
import ErrorAlert from '../../../Shared/ErrorAlert';

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
        return <ErrorAlert error={error} />;
    }

    return (
        <>
            <h1>Clients</h1>

            { admin && <Link to={Routes.Clients.New}>Create client</Link> }

            <ul>
                {clients.map((client) => (
                    <li key={client._id}>
                        <Link to={route(Routes.Clients.Detail, { id: client._id })}>
                            {client.company}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )

};

export default ClientsOverview;
