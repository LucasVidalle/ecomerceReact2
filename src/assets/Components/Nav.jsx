import "./Nav.css";

function Nav() {
    return (
        <div className="nav-bar">
            <p className="nav-bar-title">The best fucking ecomerce in the world</p>
            <button className="change-button" onClick={toggleView}>Change</button>
        </div>
    )

}

export { Nav };
