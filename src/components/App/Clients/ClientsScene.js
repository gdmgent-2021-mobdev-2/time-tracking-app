import ClientsOverview from './Overview/ClientsOverview';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Routes } from '../../../core/routing';
import CreateClient from './New/CreateClient';
import ClientDetailContainer from './Detail/ClientDetailContainer';
import AdminRoute from '../../Shared/Admin/AdminRoute';

const ClientsScene = () => {
    return (
        <Switch>
            <AdminRoute path={Routes.Clients.New}>
                <CreateClient />
            </AdminRoute>
            <Route path={Routes.Clients.Detail}>
                <ClientDetailContainer />
            </Route>
            <Route path={Routes.Clients.Index}>
                <ClientsOverview />
            </Route>
            <Redirect to={Routes.Clients.Index} />
        </Switch>
    );
};

export default ClientsScene;
