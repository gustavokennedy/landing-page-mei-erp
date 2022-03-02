import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'Acesso de qualquer dispositivo e lugar. Controle o tipo de aceso e quem acesso o sistema.',
    heading: 'Controle de acesso',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      'Pacote completo com recursos indispensáveis para seu negócio ser descomplicado.',
    heading: 'Recursos ilimitados',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'Caso seu negócio já possui algum sistema que permite integração, nosso suporte faz.',
    heading: 'Fácil inetegração',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      'Recurso exclusivo para você atingir cliente em potêncial e aumentar seu faturamento.',
    heading: 'Marketing - em breve',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      'Amamos desenvolver e o MEI ERP e sempre estará atualizado com as suas necessidades.',
    heading: 'Desenvolvimento constante',
    path: '#',
  },
  {
    image: serviceImage6,
    text:
      'Trabalhamos com suporte via WhatsApp, sem aplicativos ou help-desk. Queremos ajudá-lo.',
    heading: 'Suporte único',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Recursos do MEI ERP"
          text="As principais vantagens do sistema para seu negócio"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
