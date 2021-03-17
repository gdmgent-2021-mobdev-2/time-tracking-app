import { useParams } from 'react-router';
import { Routes } from '../../../../core/routing';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useCallback } from 'react';
import useFetch from '../../../../core/hooks/useFetch';
import Spinner from '../../../Design/Spinner';
import AdminRoute from '../../../Shared/Admin/AdminRoute';
import ErrorAlert from '../../../Shared/ErrorAlert';
import ProjectDetail from './Detail/ProjectDetail';
import { fetchProject } from '../../../../core/modules/projects/api';
import EditProject from './Edit/EditProject';

const ProjectDetailContainer = () => {
    const { id } = useParams();

    const apiCall = useCallback(() => {
        return fetchProject(id);
    }, [id]);

    const {
        data: project,
        error,
        setData,
        isLoading
    } = useFetch(apiCall);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorAlert error={error} />;
    }

    return (
        <Switch>
            <AdminRoute path={Routes.Projects.Edit}>
                <EditProject project={project} onUpdate={setData} />
            </AdminRoute>
            <Route path={Routes.Projects.Detail}>
                <ProjectDetail project={project} />
            </Route>
            <Redirect to={Routes.Projects} />
        </Switch>
    );
};

export default ProjectDetailContainer;
