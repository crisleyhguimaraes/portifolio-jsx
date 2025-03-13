import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Front-end</h5>
                            <small>+ 2 anos</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clientes Atendidos</h5>
                            <small>200+</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projetos</h5>
                            <small>10+ Implantados</small>
                        </article>
                    </div>

                    <p>
                        Minha carreira começou com foco em suporte ao usuário,
                        onde desenvolvi habilidades essenciais para diagnosticar
                        e resolver problemas rapidamente, oferecendo um
                        atendimento personalizado e eficaz. Essa experiência
                        fortaleceu minha capacidade de comunicação e empatia,
                        habilidades essenciais para uma atuação de sucesso no
                        suporte ao cliente. Além disso, estou sempre em busca de
                        melhorias e otimizações que tragam benefícios tanto para
                        o cliente quanto para o negócio.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Vamos bater um papo?
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
