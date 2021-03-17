import { useCallback } from 'react';
import { useAuth } from '../../components/Auth/AuthProvider';
import { handleApiResult, withToken } from '../utils/api';
import ApiError from '../error/ApiError';
import AppError from '../error/AppError';

const useAuthApi = () => {
    const { token, logout } = useAuth();

    const withAuth = useCallback((promise) => {
        return new Promise((resolve, reject) => {
            withToken(promise, token)
                .then(handleApiResult)
                .then((data) => resolve(data))
                .catch((error) => {
                    if (error instanceof ApiError) {
                        if (error.isUnauthorized()) {
                            logout();
                        } else {
                            reject(error);
                        }
                    } else {
                        reject(new AppError(error));
                    }
                })

        });
    }, [logout, token]);

    return withAuth;
};

export default useAuthApi;
