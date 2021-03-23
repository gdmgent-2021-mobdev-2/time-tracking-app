import { useCallback, useState } from 'react';
import useFetch from '../../../../../../core/hooks/useFetch';
import useAdmin from '../../../../../../core/hooks/useAdmin';
import Spinner from '../../../../../Design/Spinner';
import ErrorAlert from '../../../../../Shared/ErrorAlert';
import { fetchLogsByProject } from '../../../../../../core/modules/logs/api';
import Button from '../../../../../Design/Button';
import { format, parse } from 'date-fns';
import { formatMinutesToString } from '../../../../../../core/modules/logs/utils';
import EditLog from '../Edit/EditLog';

const LogsOverview = ({ projectId }) => {
    const fetchLogs = useCallback(() => fetchLogsByProject(projectId), [projectId]);
    const [currentLog, setCurrentLog] = useState();

    const {
        data: logs,
        error,
        refresh,
        isLoading,
    } = useFetch(fetchLogs);

    const admin = useAdmin();

    const handleCreateLog = () => {
        setCurrentLog({});
    }

    const handleLogUpdate = (log) => {
        setCurrentLog(null);
        refresh();
    }

    if (isLoading) {
        return <Spinner/>;
    }

    if (error) {
        return <ErrorAlert error={error} />;
    }

    return (
        <>
            <Button onClick={handleCreateLog}>Create Log</Button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Description</th>
                        { admin && <th>User</th> }
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                { logs.map(log => (
                    <tr key={log._id}>
                        <td>{ format(parse(log.date, 'yyyy-MM-dd', new Date()), 'dd/MM') }</td>
                        <td>{ formatMinutesToString(log.duration) }</td>
                        <td>{ log.description }</td>
                        { admin && <td>{ log.user?.name }</td> }
                        <td>
                            <Button color="secondary" onClick={() => setCurrentLog(log)}>✏️</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {
                currentLog &&
                    <EditLog projectId={projectId}
                             log={currentLog}
                             onUpdate={handleLogUpdate} />
            }
        </>
    )
};

export default LogsOverview;
