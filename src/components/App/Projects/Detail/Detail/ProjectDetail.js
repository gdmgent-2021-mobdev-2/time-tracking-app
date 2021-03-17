import { Link } from 'react-router-dom';
import { route, Routes } from '../../../../../core/routing';
import AdminContainer from '../../../../Shared/Admin/AdminContainer';

const ProjectDetail = ({ project }) => {
    return (
        <>
            <h1>{project.name}</h1>
            <AdminContainer>
                <Link to={route(Routes.Projects.Edit, { id: project.id })}>
                    Edit project
                </Link>
            </AdminContainer>
        </>
    );
};

export default ProjectDetail;
