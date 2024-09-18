import './Footer.css';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'; 
import { FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="connections">
                    <a href="/#" id="instaIcon"><AiFillInstagram /></a>
                    <a href="/#" id="fbIcon"><FaFacebook /></a>
                    <a href="https://www.linkedin.com/in/purvesh-patil-92273a238/" target="_blank" rel="noreferrer" id="linkedIcon"><AiFillLinkedin /></a>
                </div>
                All Rights Reserved <a href="https://fx31labs.com/" target="_blank">Fx31Labs</a> &copy; 2024
            </div>
        </footer >
    )
}

export default Footer;