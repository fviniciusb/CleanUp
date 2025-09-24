import React, { useState } from 'react';
import './App.css'; 

// 1. Corrigido o nome da importação para maior clareza
import ProfessionalsCarousel from './components/Carrosel/ProfessionalsCarousel'; 
import './components/Carrosel/Photocard.css';

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
      image: 'https://lh3.googleusercontent.com/rd-gg-dl/AJfQ9KS5SiKaFFRo1VhFTbzfGABEon_x8VwEajkI7B7G-CNtdAKSRUloj-lPgx6f0IiR7kjnlcW3iA_EdtMoXLdbxOPt_9PgZ_4E4xdDU8Cb_OzhhXrUYRzGoF11x9Uge7fv8VZS0dlfyHkNTnaLe9WBGzI8_siSoRDgqXdDyUyFrIyOKGjBqBw_yon0-kxhpKrIPAQFTYw6fWTAssKVOvylOenX-XhyVIlmFMxqGyVF76GOgp1uU94PaWVnwGYaVmgu8jrK7SduAqVmal9pJe2T2k-OOPcOcMloQnQzqxdD6ZNtVEogi3s94YazeGMPoiKbQsH9UY_AYsGww0am3qhJ8Kc5RCQim9fRjR98lYfdpmu7iBBdDBrpettLwz9yxih4uLcsRGpVlc74IKt57JbRPq-opk-ABedZHeaGXfS7cPNjezgqEAvk-GUkscMP70jHixCoCkKUsT9I0WIQB-HGQMkuT-OCaL13WiqkF5zUDoiIjP-MVsTwh4rcjT5QOBu789Ind1n0--702YIYZJwdxs5WT8zuS2xmI7txZAC3FXR5K2SWJB28IDzk8Er59biswEWFoDrMs6tpLuOk2n5iRmmAPSrHzv0H9lPZlmjeEoGQPFo8abRKpjC5gAUl0DK_BuirUP-rxs_-gR5oDOOPrufWeCCIJg2TPSsbxolIAejwCVBqpT90XbhM3W5hm8qel9SDBKvBCdRKCw5IdK6ufM8g_xqU7OM7cu4eBT8kv1OkQSf6UK4pkkNMuikqI6WU64t45kH47ho0jRDXpcHahrS4CV1Sr9SztSZyvSG_i-RfcScPbk1kzDDPXT0_6MBaBYbPb9GG3RSCukMj-s4hScm0jCiGp8UCDO7_sCHBOHqqyC9FlTjtSgHG4-iqxb7cyhNiNkX36vq3WwXkr8JNeBlKAqLWrM9eNA2-sGx6soTktv9IWy0t1qBimJPf72vFHCQ5wXno4u0YP9nd1ohDSb9WSlzUQl_VgYeT5iPq5vSFXFGA8esloipR8LV5gFQwadZ6Q82Cw0jB8KaCU7duQS_uKZgb0IyN8iUWIVky6rT75kfilQnQVtCOvZrNrd91g2RCknqbGvCF2NFWxpxPy1z-RQNq_Rd_Ck59A6JPnNkfZwVIXjCh4JIDdzHmOe3QqaHdaJWjD54H4v6y0F-TKDxugvbfcWn7iLBEqFJZppaojCKYSCLFiX4x=s1024',
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
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Login / Cadastro</h2>
            {/* Conteúdo do modal aqui */}
          </div>
        </div>
      )}
    </>
  );
}

export default App;