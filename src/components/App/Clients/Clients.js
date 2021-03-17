import ClientsOverview from './Overview/ClientsOverview';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Routes } from '../../../core/routing';
import CreateClient from './New/CreateClient';

const Clients = () => {
    return (
        <Switch>
            <Route path={Routes.ClientsNew}>
                <CreateClient />
            </Route>
            <Route path={Routes.Clients}>
                <ClientsOverview />
            </Route>
            <Redirect to={Routes.Clients} />
        </Switch>
    );
};

export default Clients;
