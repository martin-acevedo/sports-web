import './modal.css';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-x" onClick={onClose}>×</button>
        
        <h2>Información del Desarrollador</h2>
        
        <div className="dev-info">
          <p><strong>Nombre:</strong> Martín Acevedo</p>
          <p><strong>Carrera:</strong> Ingeniería en Desarrollo de Software</p>
          <p><strong>Ciudad:</strong> Talca, Chile</p>
          <p>
            <strong>GitHub: </strong> 
            <a href="https://github.com/martin-acevedo" target="_blank" rel="noreferrer">
               github.com/martin-acevedo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;