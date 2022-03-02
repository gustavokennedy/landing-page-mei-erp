/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Image src={image} alt="Logo - MEI ERP - Landing Page para o projeto MEI ERP. Sistema ERP para controle de pequenos negócios MEI." />
    </Link>
  );
}
