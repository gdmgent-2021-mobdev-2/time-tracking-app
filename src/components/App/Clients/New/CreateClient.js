import { useState } from 'react';
import ClientForm from '../Form/ClientForm';
import useAuthApi from '../../../../core/hooks/useAuthApi';
import { createClient } from '../../../../core/modules/clients/api';
import ErrorAlert from '../../../Shared/Alert/ErrorAlert';
import { useHistory } from 'react-router';
import { Routes } from '../../../../core/routing';
import PageHeader from '../../../Shared/Header/PageHeader';

const CreateClient = () => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(createClient(data))
            .then(() => {
                history.push(Routes.Clients.Index);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    };

    return (
        <>
            <PageHeader title="Create client" />

            <ErrorAlert error={error} />

            <ClientForm onSubmit={handleSubmit} disabled={isLoading} />
        </>
    );
};

export default CreateClient;
