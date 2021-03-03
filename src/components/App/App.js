import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const App = () => {

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <h1>Welkom</h1>
                    </main>
                </div>
            </div>
        </>
    )

};

export default App;
