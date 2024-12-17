import NavBar from "../../components/NavBar/NavBar";
import Financing from "../../components/Calculator/Financing";
import Footer from "../../components/Footer/Footer";

import graphic from "../../assets/img/image 29.png";
import money from "../../assets/img/imageMoney.png";
import video1 from "../../assets/videos/WhatsApp Video 2024-12-05 at 18.29.57.mp4";
import video2 from "../../assets/videos/WhatsApp Video 2024-12-05 at 18.29.59.mp4";

import { IoIosArrowForward } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoIosAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { Link } from "react-router-dom";

import Card1 from "../../assets/icons/imagenChanchito.png";
import Card2 from "../../assets/icons/Maceta.png";
import Card3 from "../../assets/icons/Defensa.png";

import { useState } from "react";
import Investment from "../../components/Calculator/Investment";



const Landing = () => {
  const [activeTab, setActiveTab] = useState("invertir");

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "¿Qué requisitos necesito para empezar a invertir?",
      content: "Este es el contenido de la Sección 1.",
    },
    {
      title: "¿Qué tipo de financiamiento ofrecen?",
      content: "Este es el contenido de la Sección 2.",
    },
    {
      title: "¿Cuánto tiempo tarda en aprobarse un crédito?",
      content: "Este es el contenido de la Sección 3.",
    },
    {
      title: "¿Puedo retirar mi inversión en cualquier momento?",
      content: "Este es el contenido de la Sección 4.",
    },
    {
      title: "¿Qué tan segura es la plataforma?",
      content:
        "Utilizamos tecnología de encriptación de última generación para proteger tus datos y transacciones. Además, cumplimos con todas las normativas financieras vigentes.",
    },
  ];

  return (
    <div>
      <NavBar />
      <section className="relative">
        <img className="object-cover" src={graphic} alt="" />
        <div className="flex flex-col w-[400px] gap-2 absolute top-28 left-20">
          <h1 className="font-inter font-bold text-4xl">
            Invierte en el futuro, financia oportunidades de terrenos
          </h1>
          <p className="text-[#222222] font-inter">
            Ayudamos a compradores a financiar su tierra y a inversores a
            obtener retornos seguros en proyectos inmobiliarios.
          </p>
          <div className="flex gap-4">
            <button className="px-2 py-1 bg-[#3B42CB] text-white rounded-full flex items-center gap-2">
              Quiero Financiación
              <IoIosArrowForward />
            </button>
            <button className="px-2 py-1 text-[#3B42CB] border border-[#3B42CB] rounded-full font-inter flex items-center gap-2">
              Quiero Invertir
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>

      <section className="flex p-14 h-[532px] justify-between bg-white">
        <video
          className="w-[387px] h-[377px] object-cover rounded-[4px] overflow-hidden ml-16 "
          autoPlay
          loop
          muted
          controls
        >
          <source src={video2} type="video/mp4" />
        </video>
        <div className="w-[617px] flex flex-col gap-3">
          <div className="flex items-center gap-3 font-inter">
            <FaWallet />
            <p className="font-inter font-semibold">Compradores</p>
          </div>
          <h1 className="font-inter text-2xl font-bold">
            Financiamiento de terrenos a tu alcance
          </h1>
          <p className="font-inter font-bold">
            Accede a financiamiento flexible y rápido para hacer realidad tus
            <br />
            proyectos.
          </p>
          <p className="font-inter font-bold">
            Te ofrecemos opciones adaptadas a tus necesidades, con tasas <br />
            competitivas y un proceso sin complicaciones.
          </p>
          <div className="flex gap-4 mt-2">
            <button className="py-1 px-3 text-sm bg-[#6269F2] text-white rounded-full flex items-center gap-2">
              Conoce màs <IoIosArrowForward />
            </button>
            <button className="py-1 text-sm text-[#6269F2] rounded-full flex items-center gap-2">
              Simula tu credito ahora <IoIosArrowForward color="#6269F2" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#5258CD] pt-10">
        <h1 className="text-white font-inter text-3xl text-center">
          Impulsando el futuro de las finanzas para terrenos
        </h1>
        <p className="text-white font-inter text-center text-xs mt-3">
          Conoce las características que hacen de nuestra fintech la opción
          ideal para compradores e inversores
        </p>

        <div className="flex py-14 justify-center gap-10">
          <div className="bg-white h-80 w-72 rounded-xl relative">
            <img src={Card1} alt="" className="absolute top-[-62px]" />
            <div className="h-full p-9 flex flex-col justify-center gap-1 mt-16">
              <h4 className="font-inter text-start text-lg text-[#141414] font-semibold">
                Financiación Simplificada y Accesible
              </h4>
              <p className="text-[#4B4B4B] font-inter text-sm px-1">
                Facilitamos el acceso a créditos para terrenos con opciones de
                pago flexibles y transparentes.
              </p>
            </div>
          </div>

          <div className="bg-white h-80 w-72 rounded-xl relative">
            <div className="h-full px-8 py-4 flex flex-col gap-1 ">
              <h4 className="font-inter text-start text-lg text-[#141414] font-semibold">
                Inversiones Inteligentes en Terrenos
              </h4>
              <p className="text-[#4B4B4B] font-inter text-sm px-1">
                Ofrece a los inversores una manera confiable de hacer crecer su
                capital financiando el desarrollo de tierras.
              </p>
            </div>
            <img src={Card2} alt="" className="absolute bottom-[-60px]" />
          </div>

          <div className="bg-white h-80 w-72 rounded-xl relative">
            <img src={Card3} alt="" className="absolute top-[-35px] left-11" />
            <div className="h-full p-9 flex flex-col justify-center gap-1 mt-16">
              <h4 className="font-inter text-start text-lg text-[#141414] font-semibold">
                Transparencia y <br /> Seguridad Financiera
              </h4>
              <p className="text-[#4B4B4B] font-inter text-sm px-1">
                Todos los créditos e inversiones están respaldados con análisis
                exhaustivo y cumplimiento legal en cada transacción.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex p-14 justify-around">
        <div className="p-9 w-[630px] flex flex-col gap-3">
          <div className="flex items-center gap-3 font-inter">
            <GoGraph />
            <p className="font-inter font-semibold">Inversionistas</p>
          </div>
          <h1 className="font-inter text-2xl font-bold">
            Haz que tu dinero crezca <br />
            en tierra Firme
          </h1>
          <p className="font-inter font-bold">
            Explora una nueva forma de invertir en el financiamiento de
            terrenos, con estrategias diseñadas para maximizar tu rendimiento y
            proteger tu capital, en una plataforma transparente y confiable.
          </p>
          <div className="flex gap-4 mt-2">
            <button className="py-1 px-3 text-sm bg-[#6269F2] text-white rounded-full flex items-center gap-2">
              Conoce màs <IoIosArrowForward />
            </button>
            <button className="py-1 text-sm text-[#6269F2] rounded-full flex items-center gap-2">
              Quiero calcular rendimientos <IoIosArrowForward color="#6269F2" />
            </button>
          </div>
        </div>
        <video
          className="w-[387px] h-[377px] object-cover rounded-[4px] overflow-hidden"
          autoPlay
          loop
          muted
          controls
        >
          <source src={video1} type="video/mp4" />
        </video>
      </section>

      <section className="p-14 bg-white h-[500px]">
        <div className="ml-12">
          <h1 className="font-inter font-bold text-2xl w-80">
            Transformando el acceso a financiamiento confiable
          </h1>
          <p className="w-[700px] font-inter font-semibold text-sm">
            Con presencia en diversas regiones y un compromiso con la
            transparencia, <br /> facilitamos la administración de cientos de
            millones en proyectos para empresas <br /> y personas ambiciosas
          </p>
        </div>

        <ul className="flex mt-28 gap-8 justify-evenly">
          <li>
            <h4 className="font-inter font-semibold ">Años de Exp.</h4>
            <p className="text-4xl font-extrabold bg-textGradient bg-clip-text text-transparent">
              5+
            </p>
          </li>
          <li>
            <h4 className="font-inter font-semibold ">En Financiamiento</h4>
            <p className="text-4xl font-extrabold bg-textGradient bg-clip-text text-transparent ">
              52M+
            </p>
          </li>
          <li>
            <h4 className="font-inter font-semibold ">Clientes Satisfechos</h4>
            <p className="text-4xl font-extrabold bg-textGradient bg-clip-text text-transparent ">
              100+
            </p>
          </li>
          <li>
            <h4 className="font-inter font-semibold">Operatividad</h4>
            <p className="text-4xl font-extrabold bg-textGradient bg-clip-text text-transparent">
              99,98%
            </p>
          </li>
        </ul>
      </section>

      <section className="bg-[#5258CD] pt-10">
        <h1 className="text-white font-inter text-3xl text-center">
          Simula y descubre por que Financia.al te conviene
        </h1>
        <p className="text-white font-inter text-center text-xs mt-3">
          Proyecta tus rendimientos como inversor o calcula el crédito que
          necesitas. Personaliza tu camino financiero
        </p>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setActiveTab("invertir")}
            className={`py-2 font-inter px-4 rounded-l-md border border-r-black flex items-center gap-1 border-white ${
              activeTab === "invertir"
                ? " bg-white text-black "
                : "bg-[#5258CD] text-white"
            }`}
          >
            <GoGraph />
            Invertir
          </button>

          <button
            onClick={() => setActiveTab("financiamiento")}
            className={`py-2 font-inter px-4 rounded-r-md border-l-black border border-gray-300 flex items-center gap-1 ${
              activeTab === "financiamiento"
                ? " bg-white text-black "
                : "bg-[#5258CD] text-white"
            }`}
          >
            <FaWallet />
            Financiamiento
          </button>
        </div>
        {activeTab === "invertir" && <Investment />}
        {activeTab === "financiamiento" && <Financing />}
      </section>

      <section className="bg-white p-10 h-[490px]">
        <h1 className="font-inter text-center text-3xl">
          Ellos confiaron en nosotros y alcanzaron sus metas
        </h1>
        <p className="font-inter text-center text-xs mt-1">
          Conoce las historias de aquellos que ya han experimentado los
          beneficios de nuestras soluciones financieras
        </p>
        <div className="flex w-full justify-evenly mt-16">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <GoGraph size={22} />
              <h3 className="font-inter font-semibold">Inversionista</h3>
            </div>
            <h4 className="font-inter text-lg font-medium">Andres Gonzàlez</h4>
            <p className="text-xs font-inter w-96 font-semibold">
              “Gracias a Financia.al, pudimos expandir nuestro negocio
              invirtiendo en terrenos. Y hoy estamos generando ganancias que
              superaron nuestras expectativas ”
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <FaWallet size={22} />
              <h3 className="font-inter font-semibold">Comprador</h3>
            </div>
            <h4 className="font-inter text-lg font-medium">Javier Silva</h4>
            <p className="text-xs font-inter w-96 font-semibold">
              “Necesitaba financiamiento para adquirir mi primer terreno, y
              financia.al nos dio el respaldo necesario. Simplemente
              excepcional.”
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <GoGraph size={22} />
              <h3 className="font-inter font-semibold">Inversionista</h3>
            </div>
            <h4 className="font-inter text-lg font-medium">Andres S.</h4>
            <p className="text-xs font-inter w-80 font-semibold">
              “He probado muchas plataformas, pero ustedes son la que me dió la
              confianza que busco en mis inversiones, con ingresos seguros y
              constantes, gracias.”
            </p>
          </div>
        </div>
      </section>

      <section className="p-11">
        <div className="flex justify-around p-14">
          <div className="flex flex-col w-[350px]">
            <h1 className="font-inter text-3xl font-semibold">
              Despeja tus dudas
            </h1>
            <p className="font-inter text-md font-semibold">
              Encuentra respuestas claras a las preguntas más comunes sobre
              nuestra plataforma de inversiones y financiamiento
            </p>
          </div>

          <div className="w-[500px]">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-[#D8D8D8]">
                <button
                  onClick={() => handleToggle(index)}
                  className="flex items-center justify-between w-full px-4 py-3 font-inter font-semibold hover:bg-gray-50"
                >
                  {section.title}
                  {openIndex === index ? (
                    <IoMdRemoveCircle className="text-xl" />
                  ) : (
                    <IoIosAddCircle className="text-xl" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 py-2 font-inter text-sm">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="text-center font-inter font-medium">
          ¿No encuentras la respuesta a tu pregunta?
          <a href="">Habla con nuestro equipo</a>
        </p>
        <div className="bg-[#6269F2] w-[85%] flex items-center ml-24 gap-10 rounded-lg px-5 py-4 justify-between  mt-10">
          <div className="flex gap-3">
            <img src={money} alt="" className="w-16 h-16" />
            <div className="w-[560px] gap-2">
              <h3 className="text-white font-inter">
                Empieza a Transformar tu Futuro Financiero
              </h3>
              <p className="text-white font-inter text-xs">
                Has crecer tus inversiones o encuentra el financiamiento ideal,
                estamos aquí para ayudarte. Únete a nuestra comunidad y da el
                primer paso para cumplir tus metas.
              </p>
            </div>
          </div>
          <button className="font-inter text-sm bg-white rounded-md px-4 py-2 ml-10">
            <Link to="/register">
            ¡Quiero Comenzar Hoy!
            </Link>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
