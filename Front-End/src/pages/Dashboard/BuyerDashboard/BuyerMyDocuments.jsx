import { useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
} from "@tremor/react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import { MdOutlineUploadFile } from "react-icons/md";
import Footer from "../../../components/Footer/Footer";

const BuyerMyDocuments = () => {
  const [activeTab, setActiveTab] = useState("Mis Documentos");
  const navigate = useNavigate();

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

  const documents = [
    {
      tipo: "Foto DNI - Frontal",
      observaciones: "-",
      fecha: "09/06/2024",
      estado: "Completada",
    },
    {
      tipo: "Foto DNI - Trasero",
      observaciones: "-",
      fecha: "09/06/2024",
      estado: "Completada",
    },
    {
      tipo: "Recibo de Sueldo 1",
      observaciones: "-",
      fecha: "09/06/2024",
      estado: "Completada",
    },
    {
      tipo: "Recibo de Sueldo 2",
      observaciones: "-",
      fecha: "09/06/2024",
      estado: "Completada",
    },
    {
      tipo: "Recibo de Sueldo 3",
      observaciones: "-",
      fecha: "09/06/2024",
      estado: "Completada",
    },
    {
      tipo: "Servicio a tu Nombre",
      observaciones: "-",
      fecha: "09/06/2024",
      estado: "Completada",
    },
  ];

  return (
    <div>
      <NavBar />
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

      <div className="p-14 ml-8 flex flex-col gap-3">
        <h3 className="text-xl font-semibold font-inter">Mis Documentos</h3>
        <p className="text-sm font-inter text-[#6A6A6A]">
          Gestiona y visualiza tu documentación.
        </p>

        <div className="bg-[#4CAF501F] border flex items-center justify-between border-[#4CAF50] text-[#4CAF50] px-4 py-6 rounded-md">
          <p className="font-inter">
            Tu Documentación ha sido aprobada. ¡Ya puedes invertir en nuestra
            plataforma!
          </p>
          <button className="ml-4 px-4 py-2 bg-[#396AD3] text-white rounded-md text-sm font-inter">
            Invertir Ahora
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
                  Observaciones
                </TableHeaderCell>
                <TableHeaderCell className="font-inter text-[#6A6A6A] text-sm">
                  Fecha
                </TableHeaderCell>
                <TableHeaderCell className="font-inter text-[#6A6A6A] text-sm">
                  Estados
                </TableHeaderCell>
                <TableHeaderCell className=""></TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documents.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className=" font-inter flex items-center gap-2 w-56">
                    <MdOutlineUploadFile />
                    {row.tipo}
                  </TableCell>
                  <TableCell className="border font-inter w-56">
                    {row.observaciones}
                  </TableCell>
                  <TableCell className="border font-inter w-56">
                    {row.fecha}
                  </TableCell>
                  <TableCell
                    className={`border font-inter w-56 ${
                      row.estado === "Rechazado"
                        ? "text-black font-bold font-inter"
                        : row.estado === "Pendiente"
                        ? "text-[#8C9E00] font-bold font-inter"
                        : "text-green-500 font-bold font-inter"
                    }`}
                  >
                    {row.estado}
                  </TableCell>
                  <TableCell className="border font-inter w-56">
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
      <Footer/>
    </div>
  );
};

export default BuyerMyDocuments;
