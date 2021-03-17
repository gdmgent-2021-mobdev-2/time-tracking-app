import Input from '../../../Design/Input';
import Button from '../../../Design/Button';
import * as yup from 'yup';
import useForm from '../../../../core/hooks/useForm';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    company: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
});

const defaultData = {
    company: '',
    email: '',
    firstName: '',
    lastName: '',
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
            <label htmlFor="company">Company</label>
            <Input type="text" name="company"
                   value={values.company}
                   disabled={disabled}
                   onChange={handleChange}
                   error={errors.company}/>

            <label htmlFor="email">Email address</label>
            <Input type="email" name="email" value={values.email} disabled={disabled} onChange={handleChange}
                   error={errors.email}/>

            <label htmlFor="firstName">First Name</label>
            <Input type="text" name="firstName" value={values.firstName} disabled={disabled} onChange={handleChange}
                   error={errors.firstName}/>

            <label htmlFor="lastName">Last Name</label>
            <Input type="text" name="lastName" value={values.lastName} disabled={disabled} onChange={handleChange}
                   error={errors.lastName}/>

            <Button type="submit" disabled={disabled}>{values._id ? 'Update' : 'Create'}</Button>

        </form>
    )

};

export default ClientForm;
