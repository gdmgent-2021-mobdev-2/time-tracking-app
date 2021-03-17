import { Route } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthProvider';
import { isAdmin } from '../../../core/modules/auth/utils';


const AdminRoute = ({ path, children }) => {
    const { user } = useAuth();
    const allowed = isAdmin(user);

    if (!allowed) {
        return null;
    }

    return (
        <Route path={path}>
            { children }
        </Route>
    )
};

export default AdminRoute;
