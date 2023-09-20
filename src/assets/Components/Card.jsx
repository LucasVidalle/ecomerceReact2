import "./Card.css";

function Card({ title, price, description, image }) {
    return (
        <div className="structure-card">
            <img className="img-card" src={image} />
            <div className="info-product">
                <h1 className="title-product">{title}</h1>
                <h2 className="description-product">{description}</h2>
                <h3 className="price-product">${price}</h3>
            </div>
            <div className="footer-card">
                <button className="buttons-card">RECOMMEND</button>
                <button className="buttons-card">BUY</button>
            </div>
        </div>
    );
}

export { Card };
