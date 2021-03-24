import { useState } from 'react';
import useAuthApi from '../../../../../../core/hooks/useAuthApi';
import ErrorAlert from '../../../../../Shared/Alert/ErrorAlert';
import LogForm from '../../../../Logs/Form/LogForm';
import {
    createLogByProject,
    updateLogByProject,
} from '../../../../../../core/modules/logs/api';
import useAdmin from '../../../../../../core/hooks/useAdmin';
import Modal from '../../../../../Shared/Modal/Modal';

const CreateOrEditLog = ({ projectId, log, onUpdate, onDismiss }) => {
    const withAuth = useAuthApi();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const admin = useAdmin();

    const isNew = !log._id;

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(
            isNew
                ? createLogByProject(projectId, data)
                : updateLogByProject(projectId, data)
        )
            .then((data) => {
                // let parent know data is updated
                onUpdate(data);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    };

    return (
        <Modal
            title={isNew ? 'Create log' : 'Update log'}
            onDismiss={onDismiss}>
            <ErrorAlert error={error} />

            <LogForm
                onSubmit={handleSubmit}
                initialData={log}
                options={{ selectUser: admin }}
                disabled={isLoading}
            />
        </Modal>
    );
};

export default CreateOrEditLog;
