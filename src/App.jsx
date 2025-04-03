import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import ThemeToggle from "./components/common/ThemeToggle";
import ErrorBoundary from "./components/common/ErrorBoundary";
import AnimateOnScroll from "./components/common/AnimateOnScroll";
import SEO from "./components/common/SEO";

const App = () => {
    return (
        <ErrorBoundary>
            <SEO />
            <div className="app">
                <Header />
                <Nav />
                <About />
                <Experience />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
                <ScrollToTop />
                <ThemeToggle />
            </div>
        </ErrorBoundary>
    );
};

export default App;
