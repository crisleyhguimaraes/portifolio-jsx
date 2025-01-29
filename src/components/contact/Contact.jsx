import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_mr4hbg4",
                "EnvioPortifolio-342",
                form.current,
                "baNLF66lJ5cZT0bI7"
            )
            .then((result) => {
                console.log("Mensagem enviada com sucesso:", result.text);
                alert("Mensagem enviada com sucesso!");
            })
            .catch((error) => {
                console.error("Erro ao enviar mensagem:", error.text);
                alert("Ocorreu um erro ao enviar a mensagem, tente novamente.");
            });

        e.target.reset();
    };

    return (
        <section id="contact">
            <h2>Entre em contato comigo!</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>crisleyhguimaraes@gmail.com</h5>
                        <a
                            href="mailto:crisleyhguimaraes@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Enviar e-mail
                        </a>
                    </article>
                    <article className="contact__option">
                        <FaLinkedinIn className="contact__option-icon" />
                        <h4>LinkedIn</h4>
                        <h5>crisleyhguimaraes</h5>
                        <a
                            href="https://www.linkedin.com/in/crisleyhguimaraes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Conectar
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>(35) 99182-8301</h5>
                        <a
                            href="https://wa.me/5535991828301?text=Ol%C3%A1%2C%20te%20encontrei%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio.%0A"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Enviar mensagem
                        </a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Digite sua mensagem"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Enviar mensagem!
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
