import "./soon.css";


function Soon({titulo, mensaje, gif}){
    return (
    <div className="soon-card">
      <img src={gif} alt="Sitio en construcción" className="soon-gif" />
      
      <div className="soon-textos">
        <h2>{titulo}</h2>
        <p>{mensaje}</p>
      </div>
    </div>
  );
}

export default Soon;