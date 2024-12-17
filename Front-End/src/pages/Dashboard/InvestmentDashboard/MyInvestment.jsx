import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import InvestmentModal from "../../../components/Modals/InvestmentModal/InvestmentModal";

import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
} from "@tremor/react";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { CiSearch } from "react-icons/ci";
import axios from "axios";
import DetailModal from "../../../components/Modals/InvestmentModal/DetailModal";
import useUserStore from "../../../zustand/UserId";

//agregar una inversion antes para que vea el usuario

const MyInvestment = () => {
  const [investment, setInvestment] = useState([]);
  const [activeTab, setActiveTab] = useState("Mis Inversiones");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDetail, setIsModalDetail] = useState(false);
  const navigate = useNavigate();
  const userPJ = useUserStore((state) => state.idPF);
  

  useEffect(() => {
    getInvestment();
  }, []);

  const tabs = [
    { name: "Panel de Control", route: "/dashboard" },
    { name: "Mis Inversiones", route: "/dashboardInvestment" },
    { name: "Simulador", route: "/dashboardSimulator" },
    { name: "Mis Transacciones", route: "/dashboardTansactions" },
    { name: "Mis Documentos", route: "/dashboardDocumets" },
  ];

  const totalAmount = investment.reduce((total, item) => {
    return total + item.deposit;
  }, 0);

  const totalProfits = investment.reduce((total, item) => {
      return total + item.profit
  },(0))

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

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.route);
  };

  const handleViewDetails = (idInvestment) => {
    navigate(`/detailInvestment/${idInvestment}`);
  };

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
        <h3 className="text-xl font-semibold font-inter">Mis inversiones</h3>
        <p className="text-sm font-inter text-[#6A6A6A]">
          Tus inversiones organizadas y listas para que tomes decisiones
          informadas
        </p>
        <div className="flex gap-8 ">
          <div className="h-44 w-72 rounded-md border border-[#D1D1D1] p-4 flex flex-col justify-around gap-2">
            <h3 className="text-xl font-bold font-inter">Total de inversiòn</h3>
            <p className="text-2xl font-semibold font-inter">{totalAmount}</p>
            <div className="flex items-center gap-1">
              <p className=" bg-[#84FF964D] text-[#0FB900] text-sm font-semibold px-2 py-1 rounded">
                100%
              </p>
              <p className="text-[#6A6A6A] font-inter text-xs">
                que el mes anterior
              </p>
            </div>
          </div>

          <div className="h-44 w-72 rounded-md border border-[#D1D1D1] p-4 flex flex-col justify-around gap-2">
            <h3 className="text-xl font-bold font-inter">
              Ganancias generadas
            </h3>
            <p className="text-2xl font-semibold font-inter">${totalProfits.toFixed(2)}</p>
            <div className="flex items-center gap-1">
              <p className=" bg-[#84FF964D] text-[#0FB900] text-sm font-semibold px-2 py-1 rounded">
                +12%
              </p>
              <p className="text-[#6A6A6A] font-inter text-xs">
                que el periodo anterior
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="relative flex items-center">
            <CiSearch className="absolute left-2" size={20} color="#6A6A6A" />
            <input
              type="text"
              placeholder="Buscar Inversión"
              className="w-72 rounded-md text-xs text-[#6A6A6A] px-8 py-3 border border-[#D9D9D9] font-inter"
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 rounded-md py-2 bg-[#396AD3] text-white font-inter"
          >
            Nueva inversion
          </button>
          {isModalOpen && (
            <InvestmentModal onClose={() => setIsModalOpen(false)} />
          )}
        </div>
        <div>
          <Table className="border border-[#D1D1D1] rounded-md">
            <TableHead className="">
              <TableRow className="">
                <TableHeaderCell className="font-inter text-[#6A6A6A] text-sm">
                  ID
                </TableHeaderCell>
                <TableHeaderCell className="font-inter text-[#6A6A6A] text-sm">
                  Nombre
                </TableHeaderCell>
                <TableHeaderCell className="font-inter text-[#6A6A6A] text-sm">
                  Monto Invertido
                </TableHeaderCell>
                <TableHeaderCell className="font-inter text-[#6A6A6A] text-sm">
                  TIR
                </TableHeaderCell>
                <TableHeaderCell className="font-inter text-[#6A6A6A] text-sm">
                  Estado
                </TableHeaderCell>
                <TableHeaderCell className=""></TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {investment.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="border font-inter">
                    {index + 1}
                  </TableCell>
                  <TableCell className="border font-inter">
                    {row.name}
                  </TableCell>
                  <TableCell className="border font-inter">
                    ${row.deposit}
                  </TableCell>
                  <TableCell className="border font-inter">
                    {row.tir}%
                  </TableCell>
                  <TableCell
                    className={`border font-inter ${
                      row.status === "Finalizado"
                        ? "text-black font-bold"
                        : row.status === "PENDIENTE"
                        ? "text-[#8C9E00] font-bold font-inter"
                        : "text-green-500 font-bold"
                    }`}
                  >
                    {row.status}
                  </TableCell>
                  <TableCell className="border font-inter">
                    <button
                      className="border border-[#165BAA] font-inter rounded-md px-3 py-2 text-sm w-full"
                      onClick={() => handleViewDetails(row.idInvestment)}
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

export default MyInvestment;
