import Input from '../../../Design/Input';
import Button from '../../../Design/Button';
import * as yup from 'yup';
import useForm from '../../../../core/hooks/useForm';
import { format } from 'date-fns';
import TimeInput from '../../Projects/Detail/Logs/Time/TimeInput';
import UserSelect from '../../User/Select/UserSelect';
import ProjectSelect from '../../Projects/Select/ProjectSelect';

const getSchema = (options) => {
    return yup.object().shape({
        date: yup.string().required(),
        description: yup.string().required(),
        duration: yup.number().required().nullable(),
        projectId: options.selectProject ? yup.string().nullable().required() : yup.string().nullable(),
        userId: options.selectUser ? yup.string().nullable().required() : yup.string().nullable(),
    });
};

const defaultData = {
    date: format(new Date(), 'yyyy-MM-dd'),
    description: '',
    duration: null,
}

const LogForm = ({ onSubmit, initialData = {}, options = {}, disabled }) => {
    const initial = {
        ...defaultData,
        ...initialData,
    };

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(getSchema(options), initial);

    const handleData = (values) => {
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit(handleData)} noValidate={true}>
            <Input type="text" name="date"
                   value={values.date}
                   label="Date"
                   disabled={disabled}
                   onChange={handleChange}
                   error={errors.date}/>

            <Input type="text" name="description"
                   value={values.description}
                   label="Description"
                   disabled={disabled}
                   onChange={handleChange}
                   error={errors.description}/>

            { options.selectUser && (
                <UserSelect
                    name="userId"
                    value={values.userId}
                    label="User"
                    disabled={disabled}
                    onChange={handleChange}
                    error={errors.userId}
                />
            )}

            { options.selectProject && (
                <ProjectSelect
                    name="projectId"
                    value={values.projectId}
                    label="Project"
                    disabled={disabled}
                    onChange={handleChange}
                    error={errors.projectId}
                />
            )}

            <TimeInput name="duration"
                   value={values.duration}
                   label="Duration"
                   disabled={disabled}
                   onChange={handleChange}
                   error={errors.duration}/>

            <Button type="submit" disabled={disabled}>{values._id ? 'Update' : 'Create'}</Button>

        </form>
    )

};

export default LogForm;
