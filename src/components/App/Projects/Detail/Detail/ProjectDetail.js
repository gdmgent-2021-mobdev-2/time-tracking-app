import { route, Routes } from '../../../../../core/routing';
import AdminContainer from '../../../../Shared/Admin/AdminContainer';
import LinkButton from '../../../../Shared/Button/LinkButton';
import LogsOverview from '../Logs/Overview/LogsOverview';
import PageHeader from '../../../../Shared/Header/PageHeader';

const ProjectDetail = ({ project }) => {
    return (
        <>
            <PageHeader title={project.name}>
                <AdminContainer>
                    <LinkButton
                        to={route(Routes.Projects.Edit, { id: project._id })}>
                        Edit project
                    </LinkButton>
                </AdminContainer>
            </PageHeader>

            <dl>
                <dt>Client</dt>
                <dd>{project.client.company}</dd>
            </dl>

            <LogsOverview projectId={project._id} />
        </>
    );
};

export default ProjectDetail;
