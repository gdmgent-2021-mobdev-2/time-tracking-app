import { Link } from 'react-router-dom';
import { route, Routes } from '../../../../core/routing';
import useFetch from '../../../../core/hooks/useFetch';
import Spinner from '../../../Design/Spinner';
import { fetchProjects } from '../../../../core/modules/projects/api';
import useAdmin from '../../../../core/hooks/useAdmin';
import ErrorAlert from '../../../Shared/ErrorAlert';

const ProjectsOverview = () => {
    const {
        data: projects,
        error,
        isLoading,
    } = useFetch(fetchProjects);

    const admin = useAdmin();

    if (isLoading) {
        return <Spinner/>;
    }

    if (error) {
        return <ErrorAlert error={error} />;
    }

    return (
        <>
            <h1>Projects</h1>

            { admin && <Link to={Routes.Projects.New}>Create project</Link> }

            <ul>
                {projects.map((project) => (
                    <li key={project._id}>
                        <Link to={route(Routes.Projects.Detail, { id: project._id })}>
                            {project.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default ProjectsOverview;
