import React from 'react';
import Slider from 'react-slick';

// Importe os estilos do slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Você pode criar um arquivo CSS separado para o card ou usar styles inline
import './Photocard.css'; 

// 1. A prop foi renomeada para 'professionals' para refletir melhor os dados que você está enviando.
const PhotoCard = ({ professionals }) => {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {/* 2. Adicionado o .map() para criar um slide PARA CADA profissional. */}
        {/* Isso garante que o carrossel tenha múltiplos slides. */}
        {professionals.map((prof) => (
          // 3. O `key` é fundamental e agora usa o id do profissional.
          <div key={prof.id}> 
            <div className='hero-card'>
              <h3>Profissionais perto de você</h3>
              <img src={prof.image} alt={prof.name} className="card-image" />
              <div className='card-content'>
                <div className='rating'>
                  <span className='star'>★★★★★</span>
                  {/* O 'prof' agora funciona porque ele vem do .map() */}
                  <span> {prof.rating} ({prof.reviews} avaliações)</span>
                </div>
                <p><strong>{prof.name}</strong></p>
                <p>{prof.description}</p>
                <div className='price'>
                  <strong>{prof.priceTest.split('•')[0]}</strong> • {prof.priceTest.split('•')[1]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCard;