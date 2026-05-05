import "./hero.css";
import shoesImg from "../../assets/shoes.png";
import { Link } from 'react-router-dom';

function Hero (){
    return (
        <section className="hero">
            {/* img principal */}
            <div className="hero-visual">
                <img src={shoesImg} alt="imagen 1" className="hero-img" />
            </div>
            {/* texto */}
            <div className="hero-text">
                <h1>DOMINA LA CANCHA</h1>
                <p>
                    Descubre la nueva colección de calzado diseñada para ofrecerte máxima amortiguación y un estilo que no pasa desapercibido. Tecnología avanzada para que cada salto cuente.
                </p>
                <Link to="/catalogo">
                    <button className="btn-read">EXPLORAR COLECCIONES</button>
                </Link>
            </div>
        </section>
    );



}

export default Hero;