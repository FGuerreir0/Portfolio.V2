import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer () {
  return (
      <footer className="footer">
        <div className="footer__container">
        <div className='footer__media'>
              <a href='https://www.facebook.com/fabio.guerreiro.9' target='_blank' rel='noopener noreferrer' title='Facebook' ><FaFacebook /></a> 
              <a href='https://www.instagram.com/fguerreir0/' target='_blank' rel='noopener noreferrer' title='Instagram'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/fabiofsguerreiro/' target='_blank' rel='noopener noreferrer' title='Linkedin'><FaLinkedin /></a>
              <a href='https://github.com/FGuerreir0' target='_blank' rel='noopener noreferrer' title='X'><FaGithub /></a>
          </div>
          <span className="footer__text">FG &copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
  );
}

export default Footer;