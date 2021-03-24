import { route, Routes } from '../../../../../core/routing';
import AdminContainer from '../../../../Shared/Admin/AdminContainer';
import LinkButton from '../../../../Shared/Button/LinkButton';
import PageHeader from '../../../../Shared/Header/PageHeader';

const ClientDetail = ({ client }) => {
    return (
        <>
            <PageHeader title={client.company}>
                <AdminContainer>
                    <LinkButton
                        to={route(Routes.Clients.Edit, { id: client.id })}>
                        Edit client
                    </LinkButton>
                </AdminContainer>
            </PageHeader>
            <dl>
                <dt>Name</dt>
                <dd>{client.name}</dd>

                <dt>Email</dt>
                <dd>{client.email}</dd>
            </dl>
        </>
    );
};

export default ClientDetail;
