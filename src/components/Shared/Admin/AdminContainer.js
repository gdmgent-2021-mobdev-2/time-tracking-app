import { useAuth } from '../../Auth/AuthProvider';
import { isAdmin } from '../../../core/modules/auth/utils';

const AdminContainer = ({ children }) => {
    const { user } = useAuth();
    const admin = isAdmin(user);

    if (!admin) {
        return null;
    }

    return children;
}

export default AdminContainer;
