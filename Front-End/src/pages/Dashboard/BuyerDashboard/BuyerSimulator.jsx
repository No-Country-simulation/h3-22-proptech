import { GoGraph } from "react-icons/go";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import { FaWallet } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
} from "@tremor/react";
import BuyerModal from "../../../components/Modals/BuyerModal/BuyerModal";

const BuyerSimulator = () => {
  const [simulator, setSimulator] = useState("Financiamiento");
  const [activeTab, setActiveTab] = useState("Simulador");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const tabs = [
    { name: "Panel de Control", route: "/dashboardBuyer" },
    { name: "Mis Creditos", route: "/buyerCredits" },
    { name: "Simulador", route: "/buyerSimulator" },
    { name: "Mis Transacciones", route: "/buyerTransaction" },
    { name: "Mis Documentos", route: "/buyerDocuments" },
  ];

  const onSubmit = async (formData) => {
    const { monto, cuotas, tna } = formData;
    try {
      const response = await axios.get(
        `http://149.50.139.181:9698/v1/api/loan/simulation`,
        {
          params: {
            capital: monto,
            nPayments: cuotas,
            TNA: tna,
          },
        }
      );
      const allData = response.data;
      const firstFour = allData.slice(0, 4);
      const lastTwo = allData.slice(-2);
      setData([...firstFour, ...lastTwo]);
      setTable(allData);
    } catch (error) {
      console.log(error);
    }
  };

  const exampleData = [
    {
      nroFee: "1",
      capital: 10000,
      amortization: 200,
      interest: 50,
      fee: 250,
    },
    {
      nroFee: "2",
      capital: 9800,
      amortization: 200,
      interest: 49,
      fee: 249,
    },
    {
      nroFee: "3",
      capital: 9800,
      amortization: 200,
      interest: 49,
      fee: 249,
    },
    {
      nroFee: "4",
      capital: 9800,
      amortization: 200,
      interest: 49,
      fee: 249,
    },
  ];

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
              <button className="py-2 font-inter px-4 rounded-l-md border border-r-black flex items-center gap-1 border-gray-500">
                <GoGraph />
                Inversion
              </button>

              <button
                onClick={() => setSimulator("Financiamiento")}
                className={`py-2 font-inter px-4 rounded-r-md border-l-black border border-gray-500 flex items-center gap-1 ${
                  simulator === "Financiamiento"
                    ? "bg-[#396AD3] text-white"
                    : ""
                }`}
              >
                <FaWallet />
                Financiamiento
              </button>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-evenly ml-5">
                <h3 className="font-inter font-semibold text-white text-3xl">
                  Simulador de Financiamiento
                </h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-3 w-64"
                >
                  <label className="font-semibold font-inter text-sm">
                    Monto*
                  </label>
                  <input
                    {...register("monto", { required: true })}
                    type="text"
                    className="border border-[#D9D9D9] px-3 py-2 rounded-md"
                  />
                  <label className="font-semibold font-inter text-sm">
                    Cuotas*
                  </label>
                  <input
                    {...register("cuotas", { required: true })}
                    type="text"
                    className="border border-[#D9D9D9] px-3 py-2 rounded-md"
                  />
                  <label className="font-semibold font-inter text-sm">
                    TNA(%)*
                  </label>
                  <input
                    {...register("tna", { required: true })}
                    type="text"
                    className="border border-[#D9D9D9] px-3 py-2 rounded-md"
                  />
                  <button className=" flex items-center justify-between w-52 rounded-md py-2 px-4 bg-[#396AD3] text-white font-inter">
                    Calcular <IoIosArrowForward />
                  </button>
                  <p className=" text-[#EEEEEE] font-inter w-96 pt-6 text-[10px]">
                    Descubre cómo nuestro sistema estima los rendimientos
                  </p>
                </form>
              </div>
              <div className="w-[700px]">
                <Link to="/tableComplete">
                  <p className="text-end text-[#396AD3] p-2 font-inter">Ver completo</p>
                </Link>
                <Table className="bg-white rounded-md shadow">
                  <TableHead className="bg-[#EDEDED]">
                    <TableRow className="border border-gray-800">
                      <TableHeaderCell className=" font-inter border border-gray-500">
                        Cuota Nº
                      </TableHeaderCell>
                      <TableHeaderCell className=" font-inter border border-gray-500">
                        Capital Inicial
                      </TableHeaderCell>
                      <TableHeaderCell className=" font-inter border border-gray-500">
                        Amortización
                      </TableHeaderCell>
                      <TableHeaderCell className=" font-inter border border-gray-500">
                        Interés
                      </TableHeaderCell>
                      <TableHeaderCell className=" font-inter border border-gray-500">
                        Pago Total
                      </TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(data.length > 0 ? data : exampleData).map(
                      (row, index) => {
                        if (data.length > 0 && index >= data.length - 2) {
                          row.nroFee = `...${row.nroFee}`;
                        }
                        return (
                          <TableRow key={index}>
                            <TableCell className="border border-[#5B5B5B] font-inter">
                              {row.nroFee}
                            </TableCell>
                            <TableCell className="border border-[#5B5B5B] font-inter">
                              {row.capital}
                            </TableCell>
                            <TableCell className="border border-[#5B5B5B] font-inter">
                              {row.amortization}
                            </TableCell>
                            <TableCell className="border border-[#5B5B5B] font-inter">
                              {row.interest}
                            </TableCell>
                            <TableCell className="border border-[#5B5B5B] font-inter">
                              {row.fee}
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
                <div className="flex justify-end pt-5 gap-5">
                <button className="border border-[#396AD3] px-9 py-2  rounded-md font-inter text-[#396AD3] ">
                    Imprimir PDF
                  </button>
                  <button onClick={()=> setIsModalOpen(true)} className="bg-[#396AD3] px-7 py-2 rounded-md font-inter text-white">
                    Quiero mi credito
                  </button>
                  {isModalOpen && (
                    <BuyerModal onClose={() => setIsModalOpen(false)}/>
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

export default BuyerSimulator;
