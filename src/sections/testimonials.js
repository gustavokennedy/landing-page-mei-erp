import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'components/block-title';
import TestimonialsCard from 'components/cards/testimonial-card';
import testimonialsImage1 from 'assets/testimonial-1-1.png';
import testimonialsImage2 from 'assets/testimonial-1-2.png';
import testimonialsImage3 from 'assets/testimonial-1-3.png';
import testimonialsImage4 from 'assets/testimonial-1-4.png';
import testimonialsImage5 from 'assets/testimonial-1-5.png';
import testimonialsImage6 from 'assets/testimonial-1-6.png';

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text:
        'Utilizo o sistema para controle do meu salão de beleza! Ajudou demais meu controle.',
      username: '@carol.mi',
      name: 'Carolina Miranda',
    },
    {
      image: testimonialsImage2,
      text:
        'Só tenho a agradecer. O sistema me ajudou demais com o controle de clientes.',
      username: '@marolibra',
      name: 'Maroli Brazo',
    },
  ],
  [
    {
      image: testimonialsImage3,
      text:
        'Adorei o sistema. Muito fácil de usar e intuitivo. As opções de controle financeiro com relatório me ajudam demais. Obrigado.',
      username: '@oiveronica',
      name: 'Veronica Silva',
    },
    {
      image: testimonialsImage4,
      text:
        'Eu tive uma ótima experiência com o sistema, coisa que nunca tive em ERP contratados. Obrigado pelo suporte eficiente também.',
      username: '@hey.carlos',
      name: 'Carlos Zandonai',
    },
  ],
  [
    {
      image: testimonialsImage5,
      text:
        'Obrigado pela ajuda no meu negócio. Serviço ótima com atendimento super rápido quando necessário.',
      username: '@eujustin',
      name: 'Justin Martins',
    },
    {
      image: testimonialsImage6,
      text:
        'Super indico. Agilizou a construção das minhas propostas, excelente sistema.',
      username: '@beniciom',
      name: 'Marcos Benício',
    },
  ],
  [
    {
      image: testimonialsImage1,
      text:
        'Vale cada centavo. Super indico para quem pequeno negócio. Ajuda e muito no meu dia a dia. A seção Financeiro ficou incrível. Obrigado.',
      username: '@aliciamed',
      name: 'Alicia Mednik',
    },
    {
      image: testimonialsImage2,
      text:
        'Nota 10000... O sistema me ajuda no dia a dia, tanto no Financeiro como com controle de clientes. Amei!',
      username: '@raianesouza',
      name: 'Raiane R. Souza',
    },
  ],
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle
        title="O que os empreendedores dizem"
        text="Depoimentos de quem utiliza"
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
};
