
const PageHeader = ({ title, children}) => {
    return (
        <div className="row">
            <h1 className="col-sm-8">{title}</h1>
            <div className="col-sm-4 text-end">
                { children }
            </div>
        </div>
    );
};

export default PageHeader;
