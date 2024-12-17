import { SlGraph } from "react-icons/sl";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
} from "@tremor/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyerTransaction = () => {
  const [activeTab, setActiveTab] = useState("Mis Transacciones");
  const navigate = useNavigate()
  const tabs = [
    { name: "Panel de Control", route: "/dashboardBuyer" },
    { name: "Mis Creditos", route: "/buyerCredits" },
    { name: "Simulador", route: "/buyerSimulator" },
    { name: "Mis Transacciones", route: "/buyerTransaction" },
    { name: "Mis Documentos", route: "/buyerDocuments" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.route);
  };

  const transactions = [
    {
      tipo: "Depósito",
      monto: "$1,000",
      observaciones: "Depósito inicial",
      fecha: "2024-12-01",
      estado: "Completado",
    },
    {
      tipo: "Retiro",
      monto: "$500",
      observaciones: "Retiro parcial",
      fecha: "2024-12-03",
      estado: "Pendiente",
    },
    {
      tipo: "Depósito",
      monto: "$2,000",
      observaciones: "Depósito mensual",
      fecha: "2024-12-05",
      estado: "Completado",
    },
    {
      tipo: "Retiro",
      monto: "$300",
      observaciones: "Retiro para gastos",
      fecha: "2024-12-07",
      estado: "Rechazado",
    },
    {
      tipo: "Depósito",
      monto: "$1,500",
      observaciones: "Depósito extraordinario",
      fecha: "2024-12-09",
      estado: "Pendiente",
    },
  ];

  return (
    <div>
      <NavBar />
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
      <div className="p-14 ml-8 flex flex-col gap-5">
        <h3 className="text-xl font-semibold font-inter">Mis Transacciones</h3>
        <p className="text-sm font-inter text-[#6A6A6A]">
          Tu historial de transacciones para un mejor control y seguimiento de
          tu actividad financiera.
        </p>
        <div className="flex gap-8 ">
          <div className="h-44 w-72 rounded-md border border-[#D1D1D1] p-4 flex flex-col gap-4">
            <h3 className="text-xl font-bold font-inter">Total de Créditos</h3>
            <p className="text-2xl font-semibold font-inter">$10.000</p>
          </div>

          <div className="h-44 w-72 rounded-md border border-[#D1D1D1] p-4 flex flex-col gap-4">
            <h3 className="text-xl font-bold font-inter">Total Abonado</h3>
            <p className="text-2xl font-semibold font-inter">$520</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Buscar Inversión"
              className="w-72 rounded-md text-xs text-[#6A6A6A] px-8 py-3 border border-[#D9D9D9] font-inter"
            />
          </div>
          <button className="px-4 rounded-md py-2 bg-[#396AD3] text-white font-inter opacity-50 hover:bg-[#396AD3] hover:opacity-100">
            Descargar Resumen
          </button>
        </div>
        <div>
          <Table className="border border-[#D1D1D1] rounded-md">
            <TableHead className="">
              <TableRow className="">
                <TableHeaderCell className="font-inter text-[#6A6A6A] text-sm">
                  Tipo
                </TableHeaderCell>
                <TableHeaderCell className="font-inter text-[#6A6A6A] text-sm">
                  Monto
                </TableHeaderCell>
                <TableHeaderCell className="font-inter text-[#6A6A6A] text-sm">
                  Observaciones
                </TableHeaderCell>
                <TableHeaderCell className="font-inter text-[#6A6A6A] text-sm">
                  Fecha
                </TableHeaderCell>
                <TableHeaderCell className="font-inter text-[#6A6A6A] text-sm">
                  Estado
                </TableHeaderCell>
                <TableHeaderCell className=""></TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className=" font-inter flex items-center gap-2">
                    <SlGraph />
                    {row.tipo}
                  </TableCell>
                  <TableCell className="border font-inter w-52">
                    {row.monto}
                  </TableCell>
                  <TableCell className="border font-inter">
                    {row.observaciones}
                  </TableCell>
                  <TableCell className="border font-inter">
                    {row.fecha}
                  </TableCell>
                  <TableCell
                    className={`border font-inter ${
                      row.estado === "Rechazado"
                        ? "text-red-500 font-bold font-inter"
                        : row.estado === "Pendiente"
                        ? "text-[#8C9E00] font-bold font-inter"
                        : "text-green-500 font-bold font-inter"
                    }`}
                  >
                    {row.estado}
                  </TableCell>
                  <TableCell className="border font-inter">
                    <button
                      className="border border-[#165BAA] font-inter rounded-md px-3 py-2 text-sm w-full"
                      onClick={() => handleViewDetails(row.id)}
                    >
                      Ver Detalles
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyerTransaction;
