import { useState } from 'react';
import App from '../App/App';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Routes } from '../../core/routing';
import LoginPage from '../Onboarding/Login/LoginPage';

const AuthContainer = () => {
    const [user, setUser] = useState();

    if (user) {
        return <App />;
    }

    return (
        <Switch>
            <Route path={Routes.Login}>
                <LoginPage setUser={setUser} />
            </Route>
            <Redirect to={Routes.Login} />
        </Switch>
    )

};

export default AuthContainer;
