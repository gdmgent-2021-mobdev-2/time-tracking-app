import useFetch from '../../../../core/hooks/useFetch';
import Spinner from '../../../Design/Spinner';
import { fetchClients } from '../../../../core/modules/clients/api';
import { Link } from 'react-router-dom';
import { route, Routes } from '../../../../core/routing';
import ErrorAlert from '../../../Shared/Alert/ErrorAlert';
import PageHeader from '../../../Shared/Header/PageHeader';
import AdminContainer from '../../../Shared/Admin/AdminContainer';
import LinkButton from '../../../Shared/Button/LinkButton';
import Card from '../../../Design/Card';

const ClientsOverview = () => {
    const {
        data: clients,
        error,
        isLoading
    } = useFetch(fetchClients);

    if (isLoading) {
        return <Spinner/>;
    }

    if (error) {
        return <ErrorAlert error={error} />;
    }

    return (
        <>
            <PageHeader title="Clients">
                <AdminContainer>
                    <LinkButton to={Routes.Clients.New}>Create client</LinkButton>
                </AdminContainer>
            </PageHeader>

            <ul className="row list-unstyled">
                {clients.map((client) => (
                    <li className="col-sm-4 my-2" key={client._id}>
                        <Link to={route(Routes.Clients.Detail, { id: client._id })}>
                            <Card>
                                <h2 className="h4">{client.company}</h2>
                                <p className="text-black-50">{client.name}</p>
                            </Card>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )

};

export default ClientsOverview;
