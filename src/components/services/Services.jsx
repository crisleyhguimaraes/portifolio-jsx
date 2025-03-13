import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
    return (
        <section id="services">
            <h2>Experiências</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Desenvolvimento Web</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Criação de sites institucionais.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Participação na criação de sistema em react.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Planejamento e Execução de Projetos.</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Infraestrutura de TI</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Gestão de Servidores e Redes.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Suporte Técnico e Help Desk.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Gestão de Segurança da Informação</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>
                                Gestão de Licenciamento e Softwares
                                Corporativos.
                            </p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Analista de Sistemas</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>
                                Levantamento de Requisitos e Análise de
                                Negócios.
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Desenvolvimento e Customização de Sistemas.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Gestão de Projetos de TI.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Integração de Sistemas.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Apoio à Tomada de Decisão.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Suporte e Treinamento de Usuários.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;
