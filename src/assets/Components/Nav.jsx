import "./Nav.css";

function Nav({ children }) {
    return (
        <div className="nav-bar">
            <p className="nav-bar-title">The best fucking ecomerce in the world</p>
            {children}
        </div>
    )

}

export { Nav };
