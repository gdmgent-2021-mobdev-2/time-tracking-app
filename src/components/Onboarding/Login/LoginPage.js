import { useState } from 'react';
import Container from '../../Design/Container';
import Styles from './LoginPage.module.scss';
import Input from '../../Design/Input';
import Button from '../../Design/Button';
import * as yup from 'yup';
import { getValidationErrors } from '../../../core/utils/validation';

let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const LoginPage = ({ setUser }) => {

    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        schema.validate(data, { abortEarly: false }).then(() => {
            fetch(`${process.env.REACT_APP_BASE_API}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((response) => response.json())
                .then((data) => {
                    setUser(data);
                })
                .catch((e) => {
                    // TODO catch error properly
                    console.log(e);
                })

        }).catch((err) => {
            setErrors(getValidationErrors(err));
        })
    };

    return (
        <Container>
            <div className="text-center">
                <form className={Styles['form-signin']} onSubmit={handleSubmit} noValidate={true}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                    <label htmlFor="email">Email address</label>
                    <Input type="email" name="email" value={data.email} onChange={handleChange} error={errors.email} />

                    <label htmlFor="password">Password</label>
                    <Input type="password" name="password" value={data.password} onChange={handleChange} error={errors.password} />

                    <Button color="primary" type="submit">Sign in</Button>
                </form>
            </div>
        </Container>
    )
};

export default LoginPage;
