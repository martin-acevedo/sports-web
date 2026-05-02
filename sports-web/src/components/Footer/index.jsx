

function Footer() {
  return (
    <footer>
      <hr /> {/* Línea divisoria que se ve en la imagen */}
      <div>
        {/* Lado izquierdo: Iconos sociales o de apps */}
        <div>
          <span>Icono1</span>
          <span>Icono2</span>
          <span>Icono3</span>
        </div>

        {/* Centro: Logo y Copyright */}
        <div>
          <h3>STADIUM</h3>
          <p>STADIUM CITY, 2026</p>
          <p>© 2026 STADIUM MEDIA. ALL RIGHTS RESERVED.</p>
        </div>

        {/* Lado derecho: Links legales */}
        <div>
          <a href="#">DEVELOPER</a>
          <a href="#">TERMS</a>
          <a href="#">PRIVACY</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;