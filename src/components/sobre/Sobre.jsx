
import React, { useState } from 'react';
import './App.css'; //

function Sobre() {
    
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">
        <div className="sobre-texto">
          <h2>Sobre a CleanUp</h2>
          <p>A CleanUp é uma plataforma inovadora que conecta você com diaristas qualificadas e verificadas para serviços de limpeza residencial. Nossa missão é facilitar o acesso a profissionais confiáveis, garantindo qualidade e segurança em cada serviço prestado.</p>
          <p>Com a CleanUp, você pode agendar limpezas de forma rápida e prática, escolhendo entre diversas opções de serviços que atendem às suas necessidades específicas. Todas as nossas diaristas passam por um rigoroso processo de seleção e verificação, assegurando que você receba o melhor atendimento possível.</p>
          <p>Além disso, oferecemos garantia de satisfação: se você não estiver satisfeito com o serviço prestado, faremos o possível para resolver a situação. Na CleanUp, valorizamos a confiança e a transparência, proporcionando uma experiência segura e eficiente para nossos clientes.</p>
          <p>Junte-se a milhares de usuários satisfeitos que já transformaram suas casas com a ajuda da CleanUp. Cadastre-se hoje mesmo e descubra como é fácil manter seu lar limpo e organizado com a ajuda de profissionais dedicadas!</p>
        </div>
        <div className="sobre-imagem">
          <img src="https://images.unsplash.com/photo-1581579181913-7f4e3f3c3b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Sobre a CleanUp" />
        </div>
      </div>
    </section>
  );
}
export default Sobre;