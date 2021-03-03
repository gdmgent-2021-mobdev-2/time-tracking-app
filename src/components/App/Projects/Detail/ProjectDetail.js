import { useParams } from 'react-router';
import TimeTracker from './TimeTracker/TimeTracker';
import { route, Routes } from '../../../../core/routing';
import { Link, Route } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams();

    return (
        <>
            <h1>Project Detail { id }</h1>

            <Link to={route(Routes.ProjectsDetailAddLog, { id })}>
                Add log
            </Link>

            <Route path={Routes.ProjectsDetailAddLog}>
                <TimeTracker />
            </Route>
        </>
    );
};

export default ProjectDetail;
