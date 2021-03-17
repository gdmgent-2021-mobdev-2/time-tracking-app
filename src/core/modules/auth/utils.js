import { Roles } from './constants';

const isAdmin = (user) => {
    return user.role === Roles.admin;
};

export {
    isAdmin,
}
