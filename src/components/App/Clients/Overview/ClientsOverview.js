import useFetch from '../../../../core/hooks/useFetch';
import Spinner from '../../../Design/Spinner';
import Alert from '../../../Design/Alert';
import Button from '../../../Design/Button';

const ClientsOverview = () => {
    const {
        data: clients,
        error,
        refresh,
        isLoading
    } = useFetch('/clients');

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }

    return (
        <>
            <h1>Projects</h1>
            <Button color="secondary" onClick={() => refresh()}>Refresh</Button>
            <ul>
                {clients.map((client) => (
                    <li key={client._id}>{client.name}</li>
                ))}
            </ul>
        </>
    )

};

export default ClientsOverview;
