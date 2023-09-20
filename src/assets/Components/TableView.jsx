import "./TableView.css"

function TableView({ title, price, description, image }) {
    return (
        <div className="table-view">
            <div className="title-table-div">
                <h1 className="title-table">{title}</h1>
            </div>
            <div className="description-table-div">
                <h2 className="description-table">{description}</h2>
            </div>
            <div className="price-table-div">
                <h3 className="price-table">${price}</h3>
            </div>
            <div className="img-table-div">
                <img className="img-table" src={image} />
            </div>
        </div>
    );
}

export { TableView }