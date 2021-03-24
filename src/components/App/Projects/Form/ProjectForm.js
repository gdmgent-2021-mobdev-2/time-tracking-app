import Input from '../../../Design/Input';
import Button from '../../../Design/Button';
import * as yup from 'yup';
import useForm from '../../../../core/hooks/useForm';
import ClientSelect from '../../Clients/Select/ClientSelect';

const schema = yup.object().shape({
    name: yup.string().required(),
    clientId: yup.string().required().nullable(),
});

const defaultData = {
    name: '',
    clientId: null,
}

const ProjectForm = ({ onSubmit, initialData = {}, disabled }) => {
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
            <Input type="text" name="name"
                   label="Name"
                   value={values.name}
                   disabled={disabled}
                   onChange={handleChange}
                   error={errors.name}/>

           <ClientSelect
               name="clientId"
               label="Client"
               value={values.clientId}
               disabled={disabled}
               onChange={handleChange}
               error={errors.clientId} />

            <Button type="submit" disabled={disabled}>{values._id ? 'Update' : 'Create'}</Button>

        </form>
    )

};

export default ProjectForm;
