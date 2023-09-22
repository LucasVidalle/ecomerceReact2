import "./TableView.css"
import { PRODUCTS } from "../../Data";

function TableView() {
    return PRODUCTS.map((product) => {
        return (
            <div key={product.id} className="table-view">
                <div className="title-table-div">
                    <h1 className="title-table">{product.title}</h1>
                </div>
                <div className="description-table-div">
                    <h2 className="description-table">{product.description}</h2>
                </div>
                <div className="price-table-div">
                    <h3 className="price-table">${product.price}</h3>
                </div>
                <div className="img-table-div">
                    <img className="img-table" src={product.image} />
                </div>
            </div>
        );
    })
}

export { TableView }