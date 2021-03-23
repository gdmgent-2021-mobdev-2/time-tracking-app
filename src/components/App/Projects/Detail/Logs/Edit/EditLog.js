import { useState } from 'react';
import useAuthApi from '../../../../../../core/hooks/useAuthApi';
import ErrorAlert from '../../../../../Shared/ErrorAlert';
import LogForm from '../../../../Logs/Form/LogForm';
import { createLogByProject, updateLogByProject } from '../../../../../../core/modules/logs/api';

const EditLog = ({ projectId, log, onUpdate }) => {

    const withAuth = useAuthApi();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(data._id ? updateLogByProject(projectId, data) : createLogByProject(projectId, data))
            .then((data) => {
                // let parent know data is updated
                onUpdate(data);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            })
    };

    return (
        <>
            <h1>Edit log</h1>

            <ErrorAlert error={error} />

            <LogForm
                onSubmit={handleSubmit}
                initialData={log}
                disabled={isLoading}
            />
        </>
    )

};

export default EditLog;
