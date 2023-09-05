import moment from 'moment';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const Footer = () => {
  const currentYear = moment().format('YYYY');
  const email = 'imondragonespinal@gmail.com';

  return (
    <footer
      style={{
        backgroundColor: '#14161f',
        borderTop: '2px solid #ccc',
      }}
    >
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          padding: '24px 16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <p
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '8px',
          }}
        >
          © {currentYear} Isidro Mondragón
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a
            href={`mailto:${email}`}
            style={{
              color: '#fff',
              marginRight: '16px',
            }}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Email'
            title='Enviar correo electrónico'
          >
            <FaEnvelope style={{ fontSize: '28px' }} />
          </a>
          <a
            href='https://www.linkedin.com/in/isidro-antonio-mondragón-espinal-77061a167/'
            style={{
              color: '#fff',
              marginRight: '16px',
            }}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <FaLinkedin style={{ fontSize: '28px' }} />
          </a>
          <a
            href='https://github.com/Antonio-M94'
            style={{
              color: '#fff',
              marginRight: '16px',
            }}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
          >
            <FaGithub style={{ fontSize: '28px' }} />
          </a>
          <a
            href='https://www.upwork.com/freelancers/~0149f170c9b524038a?viewMode=1'
            style={{
              color: '#fff',
              marginRight: '16px',
            }}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Upwork'
          >
            <SiUpwork style={{ fontSize: '28px' }} />
          </a>
          <a
            href='https://www.fiverr.com/antoniomondragn?public_mode=true'
            style={{
              color: '#fff',
              marginRight: '16px',
            }}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Fiverr'
          >
            <SiFiverr style={{ fontSize: '50px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
