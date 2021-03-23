import { useCallback, useEffect, useState } from 'react';
import { getValidationErrors } from '../utils/validation';


const useForm = (schema, initialData) => {
    const [isTouched, setIsTouched] = useState(false);
    const [values, setValues] = useState({ ...initialData });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const validate = useCallback((values, onSuccess) => {
        schema.validate(values, { abortEarly: false })
            .then(() => {
                if (onSuccess) {
                    onSuccess();
                } else {
                    // no errors and no success method, make sure we clear errors
                    setErrors({});
                }
            }).catch((err) => {
                setErrors(getValidationErrors(err));
            });
    }, [schema]);

    // wrapper method for handling submit
    // this way, we don't have to pass success callback in useForm constructor
    const handleSubmit = (callback) => (e) => {
        e.preventDefault();
        setIsTouched(true);
        validate(values, () => {
            callback(values);
        })
    };

    useEffect(() => {
        if (isTouched) {
            validate(values);
        }
    }, [validate, isTouched, values]);

    return {
        isTouched,
        values,
        errors,
        handleChange,
        handleSubmit,
    }
};

export default useForm;
