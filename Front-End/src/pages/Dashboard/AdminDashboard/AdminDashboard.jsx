import React from "react";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import { useState } from "react";
import ReactECharts from "echarts-for-react";
import { IoIosArrowForward } from "react-icons/io";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Panel de Control");

  const tabs = ["Panel de Control", "Clientes", "Solicitudes", "Transacciones"];

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
        name: "Direct",
        type: "bar",
        barWidth: "20%",
        data: [22223, 333003, , , , , ],
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
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "text-white border-b-2 border-white"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        <div className="mt-8 p-4">
          <h3 className="text-xl font-semibold font-inter ml-4">Resumen</h3>
          <div className="h-[650px] p-4">
            <div className="grid grid-cols-4 gap-5">
              <div className="h-44 rounded-md border border-[#D1D1D1] p-4 flex flex-col justify-around">
                <h3 className="text-xl font-bold font-inter">
                  Total Financiado
                </h3>
                <p className="text-2xl font-semibold font-inter">$252.993</p>
                <div className="flex items-center gap-1">
                  <p className="  bg-[#84FF964D] text-[#0FB900] text-sm font-semibold px-2 py-1 rounded">
                    +18%
                  </p>
                  <p className="text-[#6A6A6A] font-inter text-xs">
                    que el mes anterior
                  </p>
                </div>
              </div>

              <div className="h-44 rounded-md border border-[#D1D1D1] p-4 flex flex-col justify-around">
                <h3 className="text-xl font-bold font-inter">Clientes</h3>
                <p className="text-2xl font-semibold font-inter">1232</p>
                <div className="flex gap-2">
                  <button className="bg-[#89AEFF54] text-[#2A61D8] font-inter py-2 px-3 rounded-md text-xs">
                    200 Inversores
                  </button>
                  <button className="bg-[#89AEFF54] text-[#2A61D8] font-inter py-2 px-3 rounded-md text-xs">
                    1032 compradores
                  </button>
                </div>
              </div>
              <div className="h-44 rounded-md border border-[#D1D1D1] p-4 flex flex-col justify-around gap-2">
                <h3 className="text-xl font-bold font-inter">Solicitudes para revisar</h3>
                <p className="text-2xl font-semibold font-inter">5</p>
                <button className="text-white bg-[#396AD3] w-28 py-2 rounded-md">Revisar</button>
              </div>

              <div className="border border-[#D1D1D1] rounded-md row-span-2 h-[580px] p-5">
                <h3 className="text-xl font-bold font-inter">Observaciones</h3>
                <p className="mt-4 font-inter">
                  No hay nada para mostrar por el momento.
                </p>
              </div>
              <div className="col-span-3">
                <div className="border border-[#D1D1D1] rounded-md h-[384px] p-5">
                <div>
                    <h3 className="font-inter font-semibold text-2xl ">Ingresos totales</h3>
                    <p className="text-[#0B1354] font-inter font-semibold text-4xl">$333.003</p>
                    <p className="text-sm font-inter text-[#565252]">En el mes de Febrero</p>
                  </div>
                  <hr className="mt-5 bg-[#D1D1D1]" />
                  <ReactECharts
                    option={option}
                    style={{ height: "72%", width: "100%" }}
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

export default AdminDashboard;
