import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "delivery-dashboard",
        github: "https://github.com/crisleyhguimaraes/delivery-dashboard",
    },
    {
        id: 2,
        image: IMG2,
        title: "TODO ReactNative",
        github: "https://github.com/crisleyhguimaraes/TODO-ReactNative",
    },
    {
        id: 3,
        image: IMG3,
        title: "Feed",
        github: "https://github.com/crisleyhguimaraes/feed",
    },
    {
        id: 4,
        image: IMG4,
        title: "todo",
        github: "https://github.com/crisleyhguimaraes/todo-reactjs",
    },
    {
        id: 5,
        image: IMG5,
        title: "Coffee Delivery",
        github: "https://github.com/crisleyhguimaraes/coffeeDelivery",
    },
    {
        id: 6,
        image: IMG6,
        title: "CardapioJS",
        github: "https://github.com/crisleyhguimaraes/cardapio",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Peojetos</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                >
                                    Github
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
