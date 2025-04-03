import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ThemeToggle from "./components/common/ThemeToggle";
import ScrollToTop from "./components/common/ScrollToTop";
import ErrorBoundary from "./components/common/ErrorBoundary";

const App = () => {
    return (
        <ErrorBoundary>
            <ThemeProvider>
                <div className="app">
                    <ThemeToggle />
                    <ScrollToTop />
                    <Header />
                    <Nav />
                    <About />
                    <Experience />
                    <Services />
                    <Portfolio />
                    <Contact />
                    <Footer />
                </div>
            </ThemeProvider>
        </ErrorBoundary>
    );
};

export default App;
