import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Jackpot from 'sections/jackpot';
import CallToAction from 'sections/call-to-action';
import Featured from 'sections/featured';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import FAQ from 'sections/faq';
import Subscribe from 'sections/subscribe';
import WhatsAppWidget from 'react-whatsapp-widget';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
        <WhatsAppWidget 
      phoneNumber='5547991423831'
      companyName='MEI ERP'
      sendButton='Enviar'
      message='Olá! 👋🏼 Como posso ajudá-lo?'
      textReplyTime='Fique a vontade e envie suas dúvidas.'
       />
          <SEO title="MEI ERP - Sistema de gestão para pequenos negócios MEI" />
          <Banner />
          <Services />
          <Jackpot />
          <CallToAction />
          <Featured />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
