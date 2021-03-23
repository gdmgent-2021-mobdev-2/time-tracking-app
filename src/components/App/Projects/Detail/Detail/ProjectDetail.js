import { route, Routes } from '../../../../../core/routing';
import AdminContainer from '../../../../Shared/Admin/AdminContainer';
import LinkButton from '../../../../Shared/LinkButton';
import LogsOverview from '../Logs/Overview/LogsOverview';

const ProjectDetail = ({ project }) => {
    return (
        <>
            <div className="row">
                <div className="col-sm-8">
                    <h1>{project.name}</h1>
                    <p>Client: {project.client.company}</p>
                </div>
                <div className="col-sm-4">
                    <AdminContainer>
                        <LinkButton to={route(Routes.Projects.Edit, { id: project._id })}>
                            Edit project
                        </LinkButton>
                    </AdminContainer>
                </div>
            </div>

            <h2 className="mt-4">Logs</h2>
            <LogsOverview projectId={project._id} />
        </>
    );
};

export default ProjectDetail;
