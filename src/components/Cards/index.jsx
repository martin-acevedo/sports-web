import "./cards.css";

function Cards({ member }) {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="user-avatar">👤</div>
        <div>
          <h4>{member.name}</h4>
        </div>
      </div>
      <div className="card-body">
        <p>"{member.quote}"</p>
        <p>Especialista en: {member.specialty}</p>
      </div>
    </div>
  );
}

export default Cards;