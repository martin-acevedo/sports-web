import "./cards.css";

function Cards({ member }) {
  // color según el rol
  const badgeColor = member.role === "Vendedor" ? "#28a745" : "#ffc107";

  return (
    <div className="card-container">
      <div className="card-header">
        <div className="user-avatar">👤</div>
        <div>
          <h4>{member.name}</h4>
          <span className="role-badge" style={{ backgroundColor: badgeColor }}>
            {member.role}
          </span>
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