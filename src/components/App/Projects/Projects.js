import { Redirect, Route, Switch } from 'react-router-dom';
import ProjectDetail from './Detail/ProjectDetail';
import ProjectsOverview from './Overview/ProjectsOverview';
import { Routes } from '../../../core/routing';

const Projects = () => {
    return (
        <Switch>
            <Route path={Routes.ProjectsDetail}>
                <ProjectDetail />
            </Route>
            <Route path={Routes.Projects}>
                <ProjectsOverview />
            </Route>
            <Redirect to={Routes.Projects} />
        </Switch>
    );
};

export default Projects;
