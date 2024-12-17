import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";

import graphic from "../../../assets/img/Progress Pie Chart.png"

import { useState } from "react";
import ReactECharts from "echarts-for-react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


const BuyerDsahboard = () => {
  const [activeTab, setActiveTab] = useState("Panel de Control");
  const [progress, setProgress] = useState(50); // Estado inicial del progreso
  const navigate = useNavigate()
  const cuotasAbonadas = 2;
  const totalCuotas = 180;
  const progreso = (cuotasAbonadas / totalCuotas) * 100;

  const tabs = [
    { name: "Panel de Control", route: "/dashboardBuyer" },
    { name: "Mis Creditos", route: "/buyerCredits" },
    { name: "Simulador", route: "/buyerSimulator" },
    { name: "Mis Transacciones", route: "/buyerTransaction" },
    { name: "Mis Documentos", route: "/buyerDocuments" },
  ];

  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["55%", "30%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 10,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 8, name: "Costo Total" },
          { value: 300, name: "Amortizado hasta la fecha" },
        ],
      },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.route);
  };

  return (
    <div>
      <NavBar />
      <div>
        <nav className="bg-[#396AD3]">
          <div className="container mx-auto flex pl-11 py-6">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.name
                    ? "text-white border-b-2 border-white"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </nav>

        <div className="mt-8 p-4">
          <div className="flex items-center gap-3 ml-4">
            <h3 className="text-xl font-semibold font-inter">Resumen</h3>
            <select className="border border-[#D9D9D9] w-48 py-[3px] px-2 rounded-md">
              <option className="font-inter text-[#464646]">
                Financiamiento lote 1
              </option>
              <option className="font-inter text-[#464646]">
                Financiamiento lote 2
              </option>
              <option className="font-inter text-[#464646]">
                Financiamiento lote 3
              </option>
            </select>
          </div>
          <div className="h-[650px] p-4">
            <div className="grid grid-cols-4 gap-5">
              <div className="h-44 rounded-md border border-[#D1D1D1] p-4 flex flex-col justify-around">
                <h3 className="text-xl font-bold font-inter">
                  Total Financiado
                </h3>
                <p className="text-2xl font-semibold font-inter">$10.000</p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#89AEFF54] text-[#2A61D8] text-sm font-semibold px-2 py-1 rounded">
                    18%
                  </p>
                  <p className="text-[#6A6A6A] font-inter text-xs">
                    tasa de interes
                  </p>
                </div>
              </div>
              <div className="h-44 rounded-md border border-[#D1D1D1] p-4 flex flex-col justify-around">
                <h3 className="text-xl font-bold font-inter">
                  Cuotas Abonadas
                </h3>

                <p className="text-2xl font-semibold font-inter">
                  {cuotasAbonadas}/{totalCuotas}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#396AD3] h-2.5 rounded-full"
                      style={{ width: `${progreso}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {progreso.toFixed(1)}%
                  </p>
                </div>
              </div>
              <div className="h-44 rounded-md border border-[#D1D1D1] p-4 flex flex-col justify-around gap-2">
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold font-inter">
                    Cuotas Abonadas
                  </h3>
                  <p className=" bg-[#84FF964D] text-[#0FB900] text-sm font-semibold px-2 py-1 rounded">
                    Estas al dia
                  </p>
                </div>
                <p className="text-2xl font-semibold font-inter">$358,87</p>
                <p className="text-[#6A6A6A] font-inter text-xs">
                  Vence el 29/11/2024
                </p>
                <div className="flex justify-between">
                  <button className="bg-[#396AD3] text-white rounded-md px-2 py-2 font-inter">
                    Pagar Cuota
                  </button>
                  <button className="text-[#396AD3] font-inter flex items-center gap-2">
                    Ver Cuotas
                    <IoIosArrowForward className="mt-1" />
                  </button>
                </div>
              </div>
              <div className="border border-[#D1D1D1] rounded-md row-span-2 h-[580px] p-5">
                <h3 className="text-xl font-bold font-inter">Observaciones</h3>
                <p className="mt-4 font-inter">
                  No hay nada para mostrar por el momento.
                </p>
              </div>
              <div className="col-span-3 grid grid-cols-2 gap-5">
                <div className="border border-[#D1D1D1] rounded-md p-5 h-[385px]">
                  <div>
                    <h3 className="font-inter font-semibold text-2xl ">
                      Progreso
                    </h3>
                    <p className="text-[#0B1354] font-inter font-semibold text-4xl">
                      $99
                    </p>
                    <p className="text-sm font-inter text-[#565252]">
                      0,05% Amortizado del total
                    </p>
                    
                  </div>
                  <hr className="mt-5 bg-[#D1D1D1]" />
                  <ReactECharts
                  className="pr-16 pb-16"
                    option={option}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div className="border border-[#D1D1D1] rounded-md p-5 h-[385px]">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold font-inter">
                      Score Crediticio
                    </h3>
                    <p className=" bg-[#84FF964D] text-[#0FB900] text-sm font-semibold px-2 py-1 rounded">
                      Bueno
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-8">
                      <img className="mt-4" src={graphic} alt="" />
                      <p className="text-base font-inter pt-3 text-[#6A6A6A] px-8 text-center">Tu score es alto. Esto te permite acceder a mejores tasas de interés en futuros créditos.
                      ¡Buen Trabajo!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyerDsahboard;