import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                Crisley Guimarães
            </a>

            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">Sobre</a>
                </li>
                <li>
                    <a href="#experience">Expertise</a>
                </li>
                <li>
                    <a href="#services">Serviços</a>
                </li>
                <li>
                    <a href="#portfolio">Portfólio</a>
                </li>
                <li>
                    <a href="#contact">Contato</a>
                </li>
            </ul>

            <div className="footer__copyright">
                <small>&copy; Crisley Guimarães </small>
                <h2>🧑‍💻</h2>
            </div>
        </footer>
    );
};

export default Footer;
