import { useCallback } from 'react';
import useFetch from '../../../../core/hooks/useFetch';
import { fetchClient } from '../../../../core/modules/clients/api';
import Spinner from '../../../Design/Spinner';
import Alert from '../../../Design/Alert';
import { useParams } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Routes } from '../../../../core/routing';
import EditClient from './Edit/EditClient';
import ClientDetail from './Detail/ClientDetail';
import AdminRoute from '../../../Shared/Admin/AdminRoute';

const ClientDetailContainer = () => {
    const { id } = useParams();

    const apiCall = useCallback(() => {
        return fetchClient(id);
    }, [id]);

    // todo error object

    const {
        data: client,
        error,
        setData,
        isLoading
    } = useFetch(apiCall);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }

    return (
        <Switch>
            <AdminRoute path={Routes.ClientsEdit}>
                <EditClient
                    client={client}
                    onUpdate={(data) => setData(data)}/>
            </AdminRoute>
            <Route path={Routes.ClientsDetail}>
                <ClientDetail client={client} />
            </Route>
            <Redirect to={Routes.Clients} />
        </Switch>
    )
};

export default ClientDetailContainer;
