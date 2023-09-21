import "./App.css";
import { Card } from "./assets/Components/Card.jsx";
import { Nav } from "./assets/Components/Nav.jsx";
import { TableView } from "./assets/Components/TableView";
import { PRODUCTS } from "./Data";

function App() {
  return (
    <>
      <Nav />
      <div className="container-cards">
        <Card />
      </div>
      <div className="container-tables">
        <TableView />
      </div>
    </>
  );
}

export default App;
