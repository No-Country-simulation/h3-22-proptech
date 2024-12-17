import React from "react";
import { FaExclamation, FaWallet } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BuyerDetail = ({onClose}) => {
    const [detail, setDetail] = useState({})

    const { id } = useParams();

    const handleModalClick = (e) => {
      e.stopPropagation();
    };
  
    useEffect(()=> {
        getBuyerDetail()
    },[])
  
    const getBuyerDetail = async ()=> {
      try {
        const response = await axios(`${id}`)
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
          <FaWallet size={32} />
          <TiDeleteOutline
            size={22}
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        <h1 className="font-inter font-semibold">Detalle de Crédito</h1>
        <p className="font-inter text-[#535862] text-xs">Realizado el 20/90/24 - 18:01 hs</p>
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
              TNA (Tasa Nominal Anual)
            </label>
            <p className="font-inter text-xs text-[#535862]">{detail.tir}</p>
            <label className="font-inter text-[#414651] font-semibold">
              CFT(Costo Financiero Total)
            </label>
            <p className="font-inter text-xs text-[#535862]">
              ${detail.capital}
            </p>
            <label className="font-inter text-[#414651] font-semibold">
              Monto Solicitado
            </label>
            <p className="font-inter text-xs text-[#535862]">
              ${detail.capital}
            </p>
          </div>
        </div>
        <h4 className="font-inter text-[] font-semibold">Estado</h4>
        <div className="flex items-start gap-3 p-4 border border-[#B6B6B6] rounded-md">
          <div className="p-2 border border-[#B6B6B6] rounded-md">
            <FaExclamation size={20} />
          </div>
          <div>
            <label className="font-inter text-[#414651] font-semibold">
              Estado
            </label>
            <p className="font-inter text-xs text-green-600">Estas al dia</p>
            <label className="font-inter text-[#414651] font-semibold">
              Cuotas Abonadas
            </label>
            <p className="font-inter text-xs text-[#535862]">2/180</p>
            <label className="font-inter text-[#414651] font-semibold">
              Proxima Cuota
            </label>
            <p className="font-inter text-xs text-[#535862]">$368(vence: 29/11/24)</p>
          </div>
        </div>
        <button className="border border-[#B6B6B6] font-inter px-4 py-2 rounded">
          <Link to="/dashboardInvestment">Volver atras</Link>
        </button>
      </div>
    </div>
  );
};

export default BuyerDetail;
