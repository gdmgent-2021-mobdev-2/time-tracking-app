import { useState, useEffect, useCallback, useReducer } from 'react';
import useAuthApi from './useAuthApi';

const initialState = {
    data: null,
    error: null,
    page: 1,
};

const Actions = {
    Prev: 'prevPage',
    Next: 'nextPage',
    Data: 'setData',
    Error: 'setError',
    Clear: 'clear',
};

const reducer = (state, action) => {
    switch (action.type) {
        case Actions.Prev:
            return {
                ...state,
                page: Math.max(action.page - 1, 1),
                data: null,
            };
        case Actions.Next:
            return {
                ...state,
                page: action.page + 1,
                data: null,
            };
        case Actions.Clear:
            return {
                ...state,
                data: null,
                error: null,
            };
        case Actions.Data:
            return {
                ...state,
                data: action.payload,
            };
        case Actions.Error:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

const setData = (data) => ({ type: Actions.Data, payload: data });
const nextPage = () => ({ type: Actions.Next });
const prevPage = () => ({ type: Actions.Prev });
const setError = (error) => ({ type: Actions.Error, payload: error });

const useFetch = (apiCall) => {
    const withAuth = useAuthApi();

    const [state, dispatch] = useReducer(reducer, initialState);

    const { page, data, error } = state;

    const updateData = useCallback((data) => {
        dispatch(setData(data));
    }, []);

    const fetchData = useCallback(
        (isCurrent = true) => {
            withAuth(apiCall())
                .then((data) => isCurrent && dispatch(setData(data)))
                .catch((error) => isCurrent && dispatch(setError(error)));
        },
        [apiCall, withAuth]
    );

    const refresh = () => {
        fetchData();
    };

    useEffect(() => {
        dispatch({ type: Actions.Clear });
        if (apiCall) {
            let isCurrent = true;

            fetchData(isCurrent);

            return () => {
                isCurrent = false;
            };
        }
    }, [apiCall, fetchData]);

    const isLoading = !data && !error;

    return {
        data,
        setData: updateData,
        error,
        nextPage,
        prevPage,
        refresh,
        isLoading,
    };
};

export default useFetch;
