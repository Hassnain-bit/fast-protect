
import LogoBrand from '../assets/LogoMenu.svg';
import { Link } from 'react-router-dom';
import Instagram from '../assets/Instagram.svg';
import Facebook from '../assets/Facebook.svg';
import FooterEmail from '../assets/FooterEmail.svg';
import styles from '../Footer.scss';
import MaxWidth from '../components/MaxWidth';

const Footer = () => {
    return (
        <div className='footer'>
            <MaxWidth>
                <div className='logo-container'>
                    <img src={LogoBrand} alt="Logo" />
                    <p>Fast Protect</p>
                </div>
                <div className='nav-container'>
                    <ul>
                        <li><Link to="/">Acceuil</Link></li>
                        <li><Link to="/services">Nos Services</Link></li>
                        <li><Link to="/assurances">Nos Assurances</Link></li>
                        <li><Link to="/propos">A Propos</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>

                    <ul className='center-links'>
                        <li><Link to="/">Politique de confidentialité</Link></li>
                        <li><Link to="/">Cookies</Link></li>
                        <li><Link to="/">Droits d'utilisateur</Link></li>
                    </ul>

                    <div className='contact'>
                        <p>Contactez-nous</p>
                        <a>
                            <img src={FooterEmail} width={20} alt="Email" />
                            <p>email address</p>
                        </a>
                        <a>
                            <img src={Instagram} width={20} alt="Instagram" />
                            <p>fast_protect</p>
                        </a>
                        <a>
                            <img src={Facebook} width={20} alt="Facebook" />
                            <p>fast_protect</p>
                        </a>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default Footer;