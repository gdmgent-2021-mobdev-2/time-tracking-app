import { Route, Switch, Redirect } from 'react-router-dom';
import ProjectsScene from './Projects/ProjectsScene';
import ClientsScene from './Clients/ClientsScene';
import { Routes } from '../../core/routing';

const MainRouting = () => {
    return (
        <Switch>
            <Route path={Routes.Projects.Index}>
                <ProjectsScene />
            </Route>
            <Route path={Routes.Clients.Index}>
                <ClientsScene />
            </Route>
            <Redirect to={Routes.Projects.Index} />
        </Switch>
    );
};

export default MainRouting;
