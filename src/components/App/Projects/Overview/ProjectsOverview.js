import { Link } from 'react-router-dom';
import { route, Routes } from '../../../../core/routing';
import useFetch from '../../../../core/hooks/useFetch';
import Spinner from '../../../Design/Spinner';
import { fetchProjects } from '../../../../core/modules/projects/api';
import ErrorAlert from '../../../Shared/Alert/ErrorAlert';
import LinkButton from '../../../Shared/Button/LinkButton';
import PageHeader from '../../../Shared/Header/PageHeader';
import AdminContainer from '../../../Shared/Admin/AdminContainer';
import Card from '../../../Design/Card';

const ProjectsOverview = () => {
    const {
        data: projects,
        error,
        isLoading,
    } = useFetch(fetchProjects);

    if (isLoading) {
        return <Spinner/>;
    }

    if (error) {
        return <ErrorAlert error={error} />;
    }

    return (
        <>
            <PageHeader title="Projects">
                <AdminContainer>
                    <LinkButton to={Routes.Projects.New}>Create project</LinkButton>
                </AdminContainer>
            </PageHeader>

            <ul className="row list-unstyled">
                {projects.map((project) => (
                    <li className="col-sm-4 my-2" key={project._id}>
                        <Link to={route(Routes.Projects.Detail, { id: project._id })}>
                            <Card>
                                <h2 className="h4">{project.name}</h2>
                                <p className="text-black-50">{project.client.company}</p>
                            </Card>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default ProjectsOverview;
