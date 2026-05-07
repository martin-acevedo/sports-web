import "./info.css";
import { Link } from 'react-router-dom';

function Info({ nombre, carrera, ciudad, github, imagen}){
    return (
        <div className="info-gral">  
          <div className="img-container">
              <img src={imagen} className="dev-img" />
          </div>      
          <div className="dev-info">
            <h2>Información del Desarrollador</h2>
            <p><strong>Nombre:</strong> Martín Acevedo</p>
            <p><strong>Carrera:</strong> Ingeniería Civil Informática</p>
            <p><strong>Ciudad:</strong> Talca, Chile</p>
            <p>
              <strong>GitHub: </strong> 
              <a href="https://github.com/martin-acevedo" target="_blank" rel="noreferrer">
                github.com/martin-acevedo
              </a>
            </p>
          </div>
        </div>
    );
    

}


export default Info;