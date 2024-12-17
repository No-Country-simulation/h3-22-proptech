import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import { IoIosArrowForward } from "react-icons/io";
import ReactECharts from "echarts-for-react";
import { GoGraph } from "react-icons/go";
import { FaWallet } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import InvestmentModal from "../../../components/Modals/InvestmentModal/InvestmentModal";

const Simulator = () => {
  const [activeTab, setActiveTab] = useState("Simulador");
  const [simulator, setSimulator] = useState("invertir");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const [graphic, setGraphic] = useState([]);
  const navigate = useNavigate();
  
  const tabs = [
    { name: "Panel de Control", route: "/dashboard" },
    { name: "Mis Inversiones", route: "/dashboardInvestment" },
    { name: "Simulador", route: "/dashboardSimulator" },
    { name: "Mis Transacciones", route: "/dashboardTansactions" },
    { name: "Mis Documentos", route: "/dashboardDocumets" },
  ];

  const onSubmit = async (formData) => {
    const { monto, plazo } = formData;
    try {
      const response = await axios.get(
        `http://149.50.139.181:9698/v1/api/investment/simulation`,
        {
          params: {
            deposit: monto,
            nPayments: plazo,
          },
        }
      );
      setGraphic(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.route);
  };

  const chartOptions = {
    title: {
      text: `{title|Total estimado de ganancia} {subtext|${graphic.tir || 0}}`,
      left: "",
      textStyle: {
        rich: {
          title: {
            color: "#000",
            fontSize: 16,
            fontWeight: "bold",
          },
          subtext: {
            color: "#02C009",
            fontSize: 14,
            fontWeight: "bold",
          },
        },
      },
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Hoy", `${graphic.npayments || 12} meses`],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "${value}",
      },
    },
    series: [
      {
        name: "Ganancia",
        type: "line",
        areaStyle: {},
        data: [graphic.deposit || 0, graphic.capital || 122],
        itemStyle: {
          color: "#6269F2", // Color del área
        },
      },
    ],
    grid: {
      top: "15%",
      left: "1%",
      right: "4%",
      bottom: "4%",
      containLabel: true,
    },
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
        <div>
          <div className="p-14 ml-8 flex flex-col gap-5">
            <h3 className="text-xl font-semibold font-inter">Simulador</h3>
            <p className="text-sm font-inter text-[#6A6A6A]">
              Simula y evalúa rendimientos fácilmente.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setSimulator("invertir")}
                className={`py-2 font-inter px-4 rounded-l-md border border-r-black flex items-center gap-1 border-gray-500 ${
                  simulator === "invertir" ? "bg-[#396AD3] text-white" : ""
                }`}
              >
                <GoGraph />
                Inversion
              </button>

              <button className="py-2 font-inter px-4 rounded-r-md border-l-black border border-gray-500 flex items-center gap-1">
                <FaWallet />
                Financiamiento
              </button>
            </div>
            <div className="flex justify-between p-10">
              <div className="flex flex-col justify-evenly ml-3">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-3 w-64"
                >
                  <label className=" font-inter font-semibold text-sm">
                    Monto*
                  </label>
                  <input
                    {...register("monto", { required: true })}
                    type="text"
                    className="border border-[#D9D9D9] px-3 py-2 rounded-md"
                  />
                  <label className=" font-inter font-semibold text-sm">
                    Plazo (en meses)*
                  </label>
                  <input
                    {...register("plazo", { required: true })}
                    type="text"
                    className="border border-[#D9D9D9] px-3 py-2 rounded-md"
                  />
                  <button className=" flex items-center text-white justify-between w-52 rounded-md py-2 px-4 bg-[#396AD3]">
                    Calcular <IoIosArrowForward />
                  </button>
                  <p className="font-inter w-96 pt-6 text-[10px]">
                    Descubre cómo nuestro sistema estima los rendimientos
                  </p>
                </form>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-white h-80 w-[700px] rounded-md shadow-lg p-4">
                  <ReactECharts
                    option={chartOptions}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div className="flex justify-end mt-8">
                  <button onClick={()=> setIsModalOpen(true)} className="text-white rounded-md py-2 px-4 bg-[#396AD3] w-44">
                    ¡Lo Quiero!
                  </button>
                  {isModalOpen && (
                    <InvestmentModal onClose={() => setIsModalOpen(false)}/>
                  )}
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

export default Simulator;
