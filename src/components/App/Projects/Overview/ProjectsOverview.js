import { Link } from 'react-router-dom';
import { route, Routes } from '../../../../core/routing';
import useFetch from '../../../../core/hooks/useFetch';
import Spinner from '../../../Design/Spinner';
import Alert from '../../../Design/Alert';
import Button from '../../../Design/Button';

const ProjectsOverview = () => {
    const {
        data: projects,
        error,
        refresh,
        isLoading
    } = useFetch('/projects');

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }

    return (
        <>
            <h1>Projects</h1>
            <Button color="secondary" onClick={() => refresh()}>Refresh</Button>
            <ul>
                { projects.map((project) => (
                    <li key={project.id}>
                        <Link to={route(Routes.ProjectsDetail, {id: project._id})}>
                            { project.name }
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default ProjectsOverview;
