import { useState } from 'react';
import useAuthApi from '../../../../../core/hooks/useAuthApi';
import { updateProject } from '../../../../../core/modules/projects/api';
import ErrorAlert from '../../../../Shared/Alert/ErrorAlert';
import { useHistory } from 'react-router';
import { route, Routes } from '../../../../../core/routing';
import ProjectForm from '../../Form/ProjectForm';
import PageHeader from '../../../../Shared/Header/PageHeader';

const EditProject = ({ project, onUpdate }) => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(updateProject(data))
            .then((data) => {
                // let parent know data is updated
                onUpdate(data);
                // navigate to detail
                history.push(
                    route(Routes.Projects.Detail, {
                        id: data._id,
                    }));
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            })
    };

    return (
        <>
            <PageHeader title="Edit project" />

            <ErrorAlert error={error} />

            <ProjectForm
                onSubmit={handleSubmit}
                initialData={project}
                disabled={isLoading}
            />
        </>
    )
};

export default EditProject;
