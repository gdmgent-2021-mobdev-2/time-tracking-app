import Button from '../../Design/Button';

const Header = () => {

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">Company name</a>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <Button color="outline-light">Sign out</Button>
                </li>
            </ul>
        </header>
    );

};

export default Header;
