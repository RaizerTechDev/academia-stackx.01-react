import React from "react";
import PlansandPrices from "../plansAndPrices";
import academiaImage from "../../img/academia_header.gif";
import "./index.css";

function UIComponents() {
  return (
    /*vai receber o componente*/
    <div>
      <Header />
      <Hero />
      <PlansandPrices />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    //componente incluirá um título, um subtítulo e uma imagem da academia.
    <header>
      <a
        href="https://api.whatsapp.com/send/?phone=47999327137"
        target="_blank"
        rel="external noreferrer"
        title="Whatsapp"
      >
        <div className="logo">
          ACADEMIA <br /> RAFARZTECH{" "}
        </div>
      </a>
      <nav id="menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#combos">
              Combos
              <br />
              Options
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fa fa-phone-square fa-lg" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    //componente incluirá um paragrafo e uma imagem da academia.
    <section id="home" className="hero">
      <p className="hero__subtitle">
        "Transforme sua rotina com saúde!
        <br />
        Escolha o melhor <span>Combo</span> e inicie sua jornada para um estilo
        de vida mais saudável!".
      </p>
      <img className="hero__image" src={academiaImage} alt="Academia" />
    </section>
  );
};

const Footer = () => {
  return (
    //componente incluirá o rodapé e as redes sociais da academia.
    <footer id="contact" className="footer text-center mt-5">
      <h4 className="footer__title">Me acompanhe nas Redes Sociais!!!</h4>
      <div className="footer__social-icons social-icons">
        <a
          href="https://github.com/RaizerTechDev"
          target="_blank"
          title="GitHub"
          className="social-icons__link social-icon"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-raizer"
          target="_blank"
          title="Linkedin"
          className="social-icons__link social-icon"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin fa-lg"></i>
        </a>
        <a
          href="mailto:rafael.dev.raizer@gmail.com"
          target="_blank"
          rel="external noreferrer"
          title="E-mail"
          className="social-icons__link social-icon"
        >
          <i className="fa-solid fa-envelope fa-lg"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=47999327137"
          target="_blank"
          rel="external noreferrer"
          title="Whatsapp"
          className="social-icons__link social-icon"
        >
          <i className="fa-brands fa-whatsapp fa-lg"></i>
        </a>
        {/* <!-- Adicione mais ícones conforme necessário --> */}
      </div>

      <a
        className="footer__brand"
        href="https://raizertechdev-portfolio.netlify.app/"
        target="_blank"
        title="Portfolio"
        rel="noreferrer"
      >
        <p className="footer__copyright">
          &copy; 2024 RafaelRaizer. All rights reserved.{" "}
        </p>
      </a>
    </footer>
  );
};

export default UIComponents;
