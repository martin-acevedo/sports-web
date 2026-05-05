import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>MA-STORE</h1>
            </div>
            <div className="navbar-actions">
                <Link to="/catalogo">
                    <button className="btn-ventas">EXPLORAR COLECCIONES</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;