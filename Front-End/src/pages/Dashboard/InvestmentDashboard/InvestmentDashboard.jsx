import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";

import { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import useUserStore from "../../../zustand/UserId";


const InvestmentDashboard = () => {
  const [activeTab, setActiveTab] = useState("Panel de Control");
  const [investment, setInvestment] = useState([]);
  const userPJ = useUserStore((state) => state.idPF);
  console.log(investment);
  
  const navigate = useNavigate() 

  const tabs = [
    { name: "Panel de Control", route: "/dashboard" },
    { name: "Mis Inversiones", route: "/dashboardInvestment" },
    { name: "Simulador", route: "/dashboardSimulator" },
    { name: "Mis Transacciones", route: "/dashboardTansactions" },
    { name: "Mis Documentos", route: "/dashboardDocumets" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab.name); 
    navigate(tab.route);
  };

  useEffect(()=> {
    getInvestment()
  },[])

  const getInvestment = async () => {
    try {
      const response = await axios(
        `http://149.50.139.181:9698/v1/api/investment/listInv/${userPJ}`
      );
      console.log(response.data);
      setInvestment(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const cards = [
    {
      title: "Total en Inversión",
      value: "$10.000",
      percentage: "+100%",
      description: "que el mes anterior",
    },
    {
      title: "Retorno Estimado",
      value: "$1.600",
      percentage: "+16%",
      description: "Al final del período",
    },
    {
      title: "Último Pago Recibido",
      value: "$133",
      percentage: "+1%",
      description: "que el mes anterior",
    },
  ];

 const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "",
        type: "bar",
        barWidth: "20%",
        data: [3, 33, 22, 34, 44, 66, ],
      },
    ],
  };

  return (
    <div>
      <NavBar />
      <div>
        <nav className="bg-[#396AD3]">
          <div className="container mx-auto flex pl-11 py-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={()=>handleTabClick(tab)}
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
              <option className="font-inter text-[#464646]">Inversión 1</option>
              <option className="font-inter text-[#464646]">Inversión 2</option>
              <option className="font-inter text-[#464646]">Inversión 3</option>
            </select>
          </div>
          <div className="h-[650px] p-4">
            <div className="grid grid-cols-4 gap-5">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="h-40 rounded-md border border-[#D1D1D1] p-4 flex flex-col justify-around"
                >
                  <h3 className="text-xl font-bold font-inter">{card.title}</h3>
                  <p className="text-2xl font-semibold font-inter">
                    {card.value}
                  </p>
                  <div className="flex items-center gap-1">
                    <p className=" bg-[#84FF964D] text-[#0FB900] text-sm font-semibold px-2 py-1 rounded">
                      {card.percentage}
                    </p>
                    <p className="text-[#6A6A6A] font-inter text-xs">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border border-[#D1D1D1] rounded-md row-span-2 h-[580px] p-5">
                <h3 className="text-xl font-bold font-inter">Observaciones</h3>
                <p className="mt-4 font-inter">
                  No hay nada para mostrar por el momento.
                </p>
              </div>
              <div className="col-span-3">
                <div className="border border-[#D1D1D1] rounded-md h-[400px] p-5">
                  <div>
                    <h3 className="font-inter font-semibold text-2xl ">Redimientos</h3>
                    <p className="text-[#0B1354] font-inter font-semibold text-4xl">$133</p>
                    <p className="text-sm font-inter text-[#565252]">Secondary text</p>
                  </div>
                  <hr className="mt-5 bg-[#D1D1D1]" />
                  <ReactECharts
                    option={option}
                    style={{ height: "74%", width: "100%" }}
                  />
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

export default InvestmentDashboard;
