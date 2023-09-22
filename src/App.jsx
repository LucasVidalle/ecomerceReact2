import React, { useState } from 'react';
import "./App.css";
import { Card } from "./assets/Components/Card.jsx";
import { Nav } from "./assets/Components/Nav.jsx";
import { TableView } from "./assets/Components/TableView";

function App() {
  const [currentView, setCurrentView] = useState('Card');


  const toggleView = () => {
    setCurrentView(currentView === 'Card' ? 'TableView' : 'Card');
  };

  return (
    <div className='all-content'>
      <Nav>
        <button className='change-button' onClick={toggleView}>Cambiar Vista</button>
      </Nav>
      <div className="container-cards">
        {currentView === 'Card' && <Card />}
      </div>
      <div className="container-tables">
        {currentView === 'TableView' && <TableView />}
      </div>
    </div>
  );
}

export default App;






