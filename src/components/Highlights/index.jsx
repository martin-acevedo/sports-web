import "./highlight.css";
import Img1 from "../../assets/barca1.jpg";
import Img2 from "../../assets/barca2.jpg";


function Highlights() {
  return (
    <section className="highlights">
      {/* Columna Izquierda: Texto */}
      <div className="highlights-text">
        <h2>EQUIPACIÓN OFICIAL 2025/2026</h2>
        <p>
          Siente los colores con la nueva camiseta de local. Tecnología de punta para el máximo rendimiento en la cancha.
        </p>
      </div>

      {/* Columna Derecha: Imagen */}
      <div className="highlights-visual hover-container">
        <img 
          src={Img2} // Imagen de atrás
          alt="Camiseta Dorso" 
          className="highlights-img img-back" 
        />
        <img 
          src={Img1} // Imagen de frente 
          alt="Camiseta Frente" 
          className="highlights-img img-front" 
        />
      </div>
    </section>
  );
}

export default Highlights;