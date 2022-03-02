import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'Existe algum custo de instalação?',
    contents: (
      <div>
       Não há custo de instalação. Você assina o plano, cria seu login e senha e já pode acessar sua conta. Será cobrada apenas a mensalidade.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'O que acontence seu eu ficar sem internet?',
    contents: (
      <div>
        O MEI ERP é somente online, não possui módulo de contingência ou offline. Recomendamos a utilização de um bom provedor e, se possível, um link de outra operadora.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Como o suporte funciona?',
    contents: (
      <div>
        Nossa forma de atendimento no suporte é única no mercado. Atendemos via WhatsApp, de forma prática e rápida, sem help-desk ou aplicativos.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Como funciona o armazenamento dos meus dados?',
    contents: (
      <div>
        O armazenamento de dados no MEI ERP é em nuvem, no qual os dados são armazenados em servidores que poderão ser acessados de qualquer lugar no mundo, a qualquer hora. Mantemos os nossos servidores em datacenters avançados (Amazon), com alta disponibilidade e com mecanismos de backups diários.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section">
       <br />
      <Container>
        <BlockTitle
          title="Perguntas Frequentes"
          text="Veja as principais dúvidas, respondidas"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Ficou alguma dúvida? Por favor, pergunte-nos.
            </Heading>
            <Text as="p">
              Se você tem alguma dúvida não listada, fique a vontade para nos questionar.
            </Text>
            <Link sx={styles.askButton} path="https://www.wa.me/5547991322684">
              Ainda tenho dúvidas
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
};
