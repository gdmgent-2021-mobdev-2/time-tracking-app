import { useState, useCallback, useEffect } from 'react';
import Input from '../../../Design/Input';
import Button from '../../../Design/Button';
import * as yup from 'yup';
import { getValidationErrors } from '../../../../core/utils/validation';

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
    const [isTouched, setIsTouched] = useState(false);
    const [data, setData] = useState({
        ...defaultData,
        ...initialData,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const validate = useCallback((data, onSuccess) => {
        schema.validate(data, { abortEarly: false })
            .then(() => {
                if (onSuccess) {
                    onSuccess();
                }
            }).catch((err) => {
            setErrors(getValidationErrors(err));
        });
    }, []);

    useEffect(() => {
        if (isTouched) {
            validate(data);
        }
    }, [validate, isTouched, data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsTouched(true);
        validate(data, () => {
            onSubmit(data);
        })
    };

    return (
        <form onSubmit={handleSubmit} noValidate={true}>
            <label htmlFor="company">Company</label>
            <Input type="text" name="company"
                   value={data.company}
                   disabled={disabled}
                   onChange={handleChange}
                   error={errors.company}/>

            <label htmlFor="email">Email address</label>
            <Input type="email" name="email" value={data.email} disabled={disabled} onChange={handleChange}
                   error={errors.email}/>

            <label htmlFor="firstName">First Name</label>
            <Input type="text" name="firstName" value={data.firstName} disabled={disabled} onChange={handleChange}
                   error={errors.firstName}/>

            <label htmlFor="lastName">Last Name</label>
            <Input type="text" name="lastName" value={data.lastName} disabled={disabled} onChange={handleChange}
                   error={errors.lastName}/>

            <Button type="submit" disabled={disabled}>{data._id ? 'Update' : 'Create'}</Button>

        </form>
    )

};

export default ClientForm;
