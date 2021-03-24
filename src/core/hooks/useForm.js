import { useCallback, useEffect, useState, useRef } from 'react';
import { getValidationErrors } from '../utils/validation';


const useForm = (initialSchema, initialData) => {
    const [isTouched, setIsTouched] = useState(false);
    const [values, setValues] = useState({ ...initialData });
    const [errors, setErrors] = useState({});
    // we don't listen to schema changes
    const schemaRef = useRef(initialSchema);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const validate = useCallback((values, onSuccess) => {
        schemaRef.current.validate(values, { abortEarly: false })
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
    }, []);

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
