import ClientsOverview from './Overview/ClientsOverview';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Routes } from '../../../core/routing';
import CreateClient from './New/CreateClient';
import ClientDetailContainer from './Detail/ClientDetailContainer';
import AdminRoute from '../../Shared/Admin/AdminRoute';

const Clients = () => {
    return (
        <Switch>
            <AdminRoute path={Routes.ClientsNew}>
                <CreateClient />
            </AdminRoute>
            <Route path={Routes.ClientsDetail}>
                <ClientDetailContainer />
            </Route>
            <Route path={Routes.Clients}>
                <ClientsOverview />
            </Route>
            <Redirect to={Routes.Clients} />
        </Switch>
    );
};

export default Clients;
