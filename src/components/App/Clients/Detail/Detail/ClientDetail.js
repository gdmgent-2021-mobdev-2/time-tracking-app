import { Link } from 'react-router-dom';
import { route, Routes } from '../../../../../core/routing';
import AdminContainer from '../../../../Shared/Admin/AdminContainer';

const ClientDetail = ({ client }) => {
    return (
        <>
            <h1>{client.company}</h1>
            <AdminContainer>
                <Link to={route(Routes.ClientsEdit, { id: client.id })}>
                    Edit client
                </Link>
            </AdminContainer>
        </>
    );
};

export default ClientDetail;
