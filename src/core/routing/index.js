const Routes = Object.freeze({
    Login: '/login',
    Projects: {
        Index: '/projects',
        New: '/projects/new',
        Detail: '/projects/:id',
        Edit: '/projects/:id/edit',
        DetailAddLog: '/projects/:id/add',
    },
    Clients: {
        Index: '/clients',
        Detail: '/clients/:id',
        Edit: '/clients/:id/edit',
        New: '/clients/new',
    },
});

// replaces : values with values from object
// e.g. route('/projects/:id', { id : 9 }) -> /projects/9
export const route = (path, options = {}) => {
    Object.keys(options).forEach(key => {
        path = path.replace(`:${key}`, options[key]);
    });
    return path;
};

export { Routes };
