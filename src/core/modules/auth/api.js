const login = (data) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
};

export {
    login,
};
