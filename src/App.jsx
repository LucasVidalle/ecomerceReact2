import "./App.css";
import { Card } from "./assets/Components/Card.jsx";
import { Nav } from "./assets/Components/Nav.jsx";
import { TableView } from "./assets/Components/TableView";
import { PRODUCTS } from "./Data";

function App() {
  return (
    <div className="all-content">
      <Nav />
      {/* <div className="container-cards">
        {PRODUCTS.map((product) => {
          return (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          );
        })}
      </div> */}
      <div className="container-tables">
        {PRODUCTS.map((product) => {
          return (
            <TableView
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
