import { Route, Switch, Redirect } from 'react-router-dom';
import Projects from './Projects/Projects';
import Clients from './Clients/Clients';
import { Routes } from '../../core/routing';

const MainRouting = () => {
    return (
        <Switch>
            <Route path={Routes.Projects}>
                <Projects />
            </Route>
            <Route path={Routes.Clients}>
                <Clients />
            </Route>
            <Redirect to={Routes.Projects} />
        </Switch>
    );
};

export default MainRouting;
