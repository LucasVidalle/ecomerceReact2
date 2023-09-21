import "./Card.css";
import { PRODUCTS } from "../../Data";

function Card() {
    return (
        PRODUCTS.map((product) => {
            return (
                <>
                    <div key={product.id} className="structure-card">
                        <img className="img-card" src={product.image} />
                        <div className="info-product">
                            <h1 className="title-product">{product.title}</h1>
                            <h2 className="description-product">{product.description}</h2>
                            <h3 className="price-product">${product.price}</h3>
                        </div>
                        <div className="footer-card">
                            <button className="buttons-card">RECOMMEND</button>
                            <button className="buttons-card">BUY</button>
                        </div>
                    </div>
                </>
            )
        })
    );
}

export { Card };
