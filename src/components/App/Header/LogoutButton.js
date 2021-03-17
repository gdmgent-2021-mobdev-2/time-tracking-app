import { useAuth } from '../../Auth/AuthProvider';
import Button from '../../Design/Button';

const LogoutButton = () => {
    const { logout } = useAuth();

    return (
        <Button onClick={logout} color="outline-light">Sign out</Button>
    );
};

export default LogoutButton;
