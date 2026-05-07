import "./footer.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Lado Izquierdo: Redes Sociales */}
        <div className="social-icons">
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>

        {/* Lado Derecho: Link de Desarrollador */}
        <div className="developer-link">
          <Link to="/desarrollador">
            <a>
              Desarrollador
            </a>
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Talca, 2026</p>
      </div>
    </footer>
  );
}



export default Footer;