import { useEffect, useCallback, useReducer } from 'react';
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
                page: Math.max(state.page - 1, 1),
                data: null,
            };
        case Actions.Next:
            return {
                ...state,
                page: state.page + 1,
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

const useFetch = (apiCall) => {
    const withAuth = useAuthApi();

    const [state, dispatch] = useReducer(reducer, initialState);

    const { data, error } = state;

    const nextPage = useCallback(() => dispatch({ type: Actions.Next }), []);
    const prevPage = useCallback(() => dispatch({ type: Actions.Prev }), []);
    const setData = useCallback(
        (data) => dispatch({ type: Actions.Data, payload: data }),
        []
    );
    const setError = useCallback(
        (error) => dispatch({ type: Actions.Error, payload: error }),
        []
    );

    const fetchData = useCallback(
        (isCurrent = true) => {
            withAuth(apiCall())
                .then((data) => isCurrent && setData(data))
                .catch((error) => isCurrent && setError(error));
        },
        [setData, setError, apiCall, withAuth]
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
        setData,
        error,
        nextPage,
        prevPage,
        refresh,
        isLoading,
    };
};

export default useFetch;
