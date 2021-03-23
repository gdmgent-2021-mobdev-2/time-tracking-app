import Input from '../../../Design/Input';
import Button from '../../../Design/Button';
import * as yup from 'yup';
import useForm from '../../../../core/hooks/useForm';
import { format } from 'date-fns';
import TimeInput from '../../Projects/Detail/Logs/Time/TimeInput';
import UserSelect from '../../User/Select/UserSelect';

const schema = yup.object().shape({
    date: yup.string().required(),
    description: yup.string().required(),
    duration: yup.number().required().nullable(),
    // todo userId
});

const defaultData = {
    date: format(new Date(), 'yyyy-MM-dd'),
    description: '',
    duration: null,
    // todo userId
}

const ClientForm = ({ onSubmit, initialData = {}, disabled }) => {
    const initial = {
        ...defaultData,
        ...initialData,
    };
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(schema, initial);

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

           <UserSelect
               name="userId"
               value={values.userId}
               label="User"
               disabled={disabled}
               onChange={handleChange}
               error={errors.userId}
            />

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

export default ClientForm;
