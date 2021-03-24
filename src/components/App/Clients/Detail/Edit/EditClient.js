import { useState } from 'react';
import ClientForm from '../../Form/ClientForm';
import useAuthApi from '../../../../../core/hooks/useAuthApi';
import { updateClient } from '../../../../../core/modules/clients/api';
import ErrorAlert from '../../../../Shared/Alert/ErrorAlert';
import { useHistory } from 'react-router';
import { route, Routes } from '../../../../../core/routing';
import PageHeader from '../../../../Shared/Header/PageHeader';

const EditClient = ({ client, onUpdate }) => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(updateClient(data))
            .then((data) => {
                // let parent know data is updated
                onUpdate(data);
                // navigate to detail
                history.push(
                    route(Routes.Clients.Detail, {
                        id: data._id,
                    })
                );
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    };

    return (
        <>
            <PageHeader title="Edit client" />

            <ErrorAlert error={error} />

            <ClientForm
                onSubmit={handleSubmit}
                initialData={client}
                disabled={isLoading}
            />
        </>
    );
};

export default EditClient;
