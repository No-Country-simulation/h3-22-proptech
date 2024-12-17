import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../../assets/icons/logoFinanciala.svg";

const Footer = () => {
  return (
    <footer className="p-10 bg-bgFooter">
      <div className="flex items-center gap-2 mb-8">
        <img src={logo} alt="Logo de Financia.al" />
        <h1 className="text-4xl font-bold text-white font-inter">
          Financia.al
        </h1>
      </div>

      <div className="flex justify-evenly flex-wrap gap-8">
        <div>
          <h3 className="text-[#F5F5F5] font-inter text-xl mb-3">Servicios</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#inversiones"
                className="text-[#F5F5F5] text-sm font-inter"
              >
                Inversiones
              </a>
            </li>
            <li>
              <a
                href="#financiacion"
                className="text-[#F5F5F5] text-sm font-inter"
              >
                Financiación
              </a>
            </li>
            <li>
              <a
                href="#calculadora"
                className="text-[#F5F5F5] text-sm font-inter"
              >
                Calculadora
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#F5F5F5] font-inter text-xl mb-3">Beneficios</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#inversores"
                className="text-[#F5F5F5] text-sm font-inter"
              >
                Para Inversores
              </a>
            </li>
            <li>
              <a
                href="#compradores"
                className="text-[#F5F5F5] text-sm font-inter"
              >
                Para Compradores
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#F5F5F5] font-inter text-xl mb-3">Nosotros</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#historia" className="text-[#F5F5F5] text-sm font-inter">
                Nuestra Historia
              </a>
            </li>
            <li>
              <a href="#exito" className="text-[#F5F5F5] text-sm font-inter">
                Casos de Éxito
              </a>
            </li>
            <li>
              <a
                href="#politicas"
                className="text-[#F5F5F5] text-sm font-inter"
              >
                Políticas
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#F5F5F5] font-inter text-xl mb-3">Contacto</h3>
          <p className="text-white font-inter">Financia.al@latam.com</p>
          <button className="font-inter font-medium bg-white rounded-md px-3 py-2 w-full mt-3">
            Contáctanos
          </button>
          <p className="text-white font-inter mt-5">Redes</p>
          <ul className="flex gap-2 mt-2">
            <li>
              <a
                href="https://wa.me"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp color="#ffff" size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare color="#ffff" size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin color="#ffff" size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter color="#ffff" size={28} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-[#ABABAB] text-sm font-inter text-center px-8 pt-44">
        © 2024 Financia.al. Todos los derechos reservados. La información
        proporcionada en esta plataforma no constituye asesoramiento financiero.
        Consulte con un profesional antes de <br /> tomar decisiones de
        inversión. <br />
        Operamos bajo los principios de transparencia y seguridad. Las
        transacciones están sujetas a evaluación y aprobación conforme a
        nuestras políticas internas.
      </p>
    </footer>
  );
};

export default Footer;
