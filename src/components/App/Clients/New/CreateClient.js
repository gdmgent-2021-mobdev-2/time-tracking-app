import { useState } from 'react';
import ClientForm from '../Form/ClientForm';
import useAuthApi from '../../../../core/hooks/useAuthApi';
import { createClient } from '../../../../core/modules/clients/api';
import ErrorAlert from '../../../Shared/ErrorAlert';
import { useHistory } from 'react-router';
import { Routes } from '../../../../core/routing';

const CreateClient = () => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(createClient(data))
            .then(() => {
                history.push(Routes.Clients);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            })
    };

    return (
        <>
            <h1>Create client</h1>

            <ErrorAlert error={error} />

            <ClientForm
                onSubmit={handleSubmit}
                disabled={isLoading}
            />
        </>
    )
};

export default CreateClient;
