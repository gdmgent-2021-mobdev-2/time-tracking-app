import { useState } from 'react';
import useAuthApi from '../../../../core/hooks/useAuthApi';
import { createProject } from '../../../../core/modules/projects/api';
import ErrorAlert from '../../../Shared/ErrorAlert';
import { useHistory } from 'react-router';
import { Routes } from '../../../../core/routing';
import ProjectForm from '../Form/ProjectForm';

const CreateProject = () => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(createProject(data))
            .then(() => {
                history.push(Routes.Projects.Index);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            })
    };

    return (
        <>
            <h1>Create project</h1>

            <ErrorAlert error={error} />

            <ProjectForm
                onSubmit={handleSubmit}
                disabled={isLoading}
            />
        </>
    )
};

export default CreateProject;
