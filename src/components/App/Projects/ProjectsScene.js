import { Redirect, Route, Switch } from 'react-router-dom';
import ProjectDetailContainer from './Detail/ProjectDetailContainer';
import ProjectsOverview from './Overview/ProjectsOverview';
import { Routes } from '../../../core/routing';
import AdminRoute from '../../Shared/Admin/AdminRoute';
import CreateProject from './New/CreateProject';

const ProjectsScene = () => {
    return (
        <Switch>
            <AdminRoute path={Routes.Projects.New}>
                <CreateProject />
            </AdminRoute>
            <Route path={Routes.Projects.Detail}>
                <ProjectDetailContainer />
            </Route>
            <Route path={Routes.Projects.Index}>
                <ProjectsOverview />
            </Route>
            <Redirect to={Routes.Projects.Index} />
        </Switch>
    );
};

export default ProjectsScene;
