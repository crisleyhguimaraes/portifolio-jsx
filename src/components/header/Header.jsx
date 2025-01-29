import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Oi, eu sou o</h5>
                <h1>Crisley</h1>
                <h5 className="text-light">
                    Desenvolvedor Front e Analista de sistemas
                </h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scroll__down">
                    Role a tela
                </a>
            </div>
        </header>
    );
};

export default Header;
