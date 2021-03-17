import { useState, createContext, useContext } from 'react';
import App from '../App/App';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Routes } from '../../core/routing';
import LoginPage from '../Onboarding/Login/LoginPage';
import storage from '../../core/storage';

const AuthContext = createContext();

const AuthProvider = () => {
    const [auth, setAuth] = useState(storage.getUser());

    const updateAuth = (user) => {
        storage.storeUser(user);
        setAuth(user);
    };

    const logout = () => {
        updateAuth(null);
    };

    if (auth && auth.user) {
        const { user, token } = auth;
        return (
            <AuthContext.Provider value={{ user, token, logout }}>
                <App />
            </AuthContext.Provider>
        );
    }

    return (
        <Switch>
            <Route path={Routes.Login}>
                <LoginPage setUser={updateAuth} />
            </Route>
            <Redirect to={Routes.Login} />
        </Switch>
    )
};

const useAuth = () => {
    return useContext(AuthContext);
}
export {
    useAuth,
}

export default AuthProvider;
