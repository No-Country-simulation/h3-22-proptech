import { GoGraph } from "react-icons/go";
import { TiDeleteOutline } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const DetailModal = ({ onClose }) => {
  const [detail, setDetail] = useState({})

  console.log("esta es la info del detail", detail);
  

  const { id } = useParams();

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  useEffect(()=> {
    getInvestmentDetail()
  },[])

  const getInvestmentDetail = async ()=> {
    try {
      const response = await axios(`http://149.50.139.181:9698/v1/api/investment/${id}`)
      setDetail(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="flex flex-col bg-white p-5 w-[450px] rounded-lg gap-2"
        onClick={handleModalClick}
      >
        <div className="flex items-center justify-between">
          <GoGraph size={32} />
          <TiDeleteOutline
            size={22}
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        <h1 className="font-inter font-semibold">Detalle de Inversion</h1>
        <p className="font-inter text-[#535862] text-xs">Realizado el fecha</p>
        <h4 className="font-inter text-[] font-semibold">General</h4>
        <div className="flex items-start gap-3 p-4 border border-[#B6B6B6] rounded-md">
          <div className="p-2 border border-[#B6B6B6] rounded-md">
            <FaExclamation size={20} />
          </div>
          <div>
            <label className="font-inter text-[#414651] font-semibold">
              Nombre
            </label>
            <p className="font-inter text-xs text-[#535862]">{detail.name}</p>
            <label className="font-inter text-[#414651] font-semibold">
              Duracion
            </label>
            <p className="font-inter text-xs text-[#535862]">
              180 meses - 16/03/25
            </p>
            <label className="font-inter text-[#414651] font-semibold">
              TIR (Tasa interna de retorno)
            </label>
            <p className="font-inter text-xs text-[#535862]">{detail.tir}</p>
            <label className="font-inter text-[#414651] font-semibold">
              Monto Invertido
            </label>
            <p className="font-inter text-xs text-[#535862]">${detail.capital}</p>
          </div>
        </div>
        <h4 className="font-inter text-[] font-semibold">Estado</h4>
        <div className="flex items-start gap-3 p-4 border border-[#B6B6B6] rounded-md">
        <div className="p-2 border border-[#B6B6B6] rounded-md">
            <FaExclamation size={20} />
          </div>
          <div>
            <label className="font-inter text-[#414651] font-semibold">Estado</label>
            <p className="font-inter text-xs text-[#535862]">{detail.status}</p>
            <label className="font-inter text-[#414651] font-semibold">Ingresos Generados Hasta la Fecha</label>
            <p className="font-inter text-xs text-[#535862]">{detail.profit}</p>
          </div>
        </div>
        <button className="border border-[#B6B6B6] font-inter px-4 py-2 rounded">
        <Link to="/dashboardInvestment">
          Volver atras
        </Link>
          </button>
      </div>
    </div>
  );
};

export default DetailModal;
