import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação sem recarregar a página
import '../styles/components/header.css'; // Seu CSS customizado

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">LOGO - MANLIMPA</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">GESTÃO DE RESÍDUOS</Link>
        <Link to="/coleta">PONTOS DE COLETA</Link>
        <Link to="/denuncia">DENÚNCIAS</Link>
        <Link to="/educacao">EDUCAÇÃO</Link>
      </nav>
    </header>
  );
};

export default Header;