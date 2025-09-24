import React, { useState } from 'react';
import './App.css'; 

// 1. Corrigido o nome da importação para maior clareza
import ProfessionalsCarousel from './components/Carrosel/ProfessionalsCarousel'; 
import './components/Carrosel/Photocard.css';
import RegistrationForm from './components/Formulário/RegistrationForm';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const Data_Carrosel = [
    {
      id: 1,
      name: 'Maria Silva',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500',
      rating: 4.9,
      reviews: 127,
      description: 'está disponível para limpeza completa da sua casa hoje.',
      priceTest: 'Teste de Preço • 2 horas'
    },
    {
      id: 2,
      name: 'Ana Costa',
      image: 'https://parafuzo-images-marketing.s3.amazonaws.com/afro-woman-holding-bucket-with-cleaning-items-1.webp',
      rating: 4.8,
      reviews: 187,
      description: 'está disponível para limpeza de apartamentos.',
      priceTest: 'Teste de Preço • 4 horas'
    },
    {
      id: 3,
      name: 'João Pereira',
      image: 'https://sdmntprwestus.oaiusercontent.com/files/00000000-4ac4-6230-814b-a739fce5ba8e/raw?se=2025-09-24T23%3A14%3A56Z&sp=r&sv=2024-08-04&sr=b&scid=818c9bca-9c84-5f76-9b45-4d6523560eb8&skoid=ec8eb293-a61a-47e0-abd0-6051cc94b050&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-24T10%3A08%3A34Z&ske=2025-09-25T10%3A08%3A34Z&sks=b&skv=2024-08-04&sig=4SY7MvLTlnX0yc7VJa/V96wENkSr7ig1Ce3ysdz5UMU%3D',
      rating: 4.6,
      reviews: 107,
      description: 'está disponível para limpeza de casas grandes.',
      priceTest: 'Teste de Preço • 3 horas'
    }
  ];

  return (
    <>
      {/* Header */}
      <header>
        <nav>
          <a href="#home" className="logo">CleanUp</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#" className="btn-login" onClick={openModal}>Entrar</a></li>
          </ul>
        </nav>
      </header>

      {/* Bloco Principal */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Transforme seu lar com limpeza profissional</h1>
            <p>Conectamos você com profissionais qualificados e verificados. Serviços de limpeza residencial com garantia de qualidade e confiança.</p>
          
            <div className="hero-buttons">
              <button className="btn-primary" onClick={openModal}>Cadastre-se Grátis</button>
              <a href="#sobre" className="btn-secondary">Saiba Mais</a>
            </div>
          </div>

          {/* 2. REMOVIDA TODA a estrutura estática do .hero-card que estava duplicada aqui.
               Agora temos APENAS um .hero-visual.
          */}
          <div className="hero-visual">
            {/* 3. Adicionado o componente de carrossel corretamente, passando a prop 'professionals' */}
            <ProfessionalsCarousel professionals={Data_Carrosel} />
          </div>

        </div>
      </section>

      {/* Modal exemplo */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'white', cursor: 'pointer', position: 'absolute', right: '1rem'}} className="clos" onClick={closeModal}>&times;</span>
            <h2>Login / Cadastro</h2>
            {/* Conteúdo do modal aqui */}
            <RegistrationForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;