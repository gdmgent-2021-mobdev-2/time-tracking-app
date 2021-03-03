const items = [{
    'label': 'Projects',
    'icon': null,
}]

const Sidebar = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    {
                        items.map((item) => (
                            <li className="nav-item" key={item.label}>
                                <a className="nav-link active" aria-current="page" href="/">
                                    {/* TODO icon */}
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );

};

export default Sidebar;
