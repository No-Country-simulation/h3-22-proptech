import { useEffect } from "react";
import ProgresBar from "../ProgresBar/ProgresBar";
import { useRegFormContext } from "../../Context/RegFromProvider";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../zustand/UserId";

const RegisterInfo = () => {

  const userLog= useUserStore((state)=> state.userLog)
  const navigate = useNavigate()

  console.log(userLog);
  

  const handleClick = () => {
    if (userLog === "INVERSOR") {
      navigate("/dashboard")
    } else if (userLog === "PRESTAMO") {
        navigate("/dashboardBuyer")
    }

  }

  const [, dispatch] = useRegFormContext();

  useEffect(() => {
    dispatch({ type: "CHANGE_PERCENT", data: 100 });
  }, []);
  
  return (
    <div className="h-screen w-screen flex flex-col items-center gap-7">
      <h1 className="text-2xl font-semibold pt-5">
        Crea tu cuenta para comenzar
      </h1>
      <ProgresBar />
      <p className="font-inter text-xs">
        Para completar tu registro, revisa los términos detallados y confirma
        con tu firma digital
      </p>
      <div className="w-[650px] h-80 flex flex-col p-4 gap-2 border border-[#D1D1D1] bg-gray-100 rounded-md overflow-y-auto overflow-x-hidden">
        <h2 className="font-inter font-semibold text-sm">
          CONTRATO DE USO DE LA PLATAFORMA Y AUTORIZACIÓN DE DATOS
        </h2>
        <p className="font-inter font-semibold text-sm">Entre las partes:</p>
        <ul>
          <li className="text-sm font-inter">
            1. Financia, con domicilio en Buenos Aires 3333, representada por
            Mario Mario, y
          </li>
          <li className="text-sm font-inter mt-1">
            2. El usuario ("Usted"), cuyos datos personales han sido registrados
            en el formulario de inscripción,
          </li>
        </ul>
        <p className="text-sm font-inter my-3">se acuerda lo siguiente:</p>
        <ul className="flex flex-col gap-1">
          <li className="text-sm font-inter">
            1. Objeto del Contrato
            <p className="mt-3">
              Este contrato regula el uso de la Plataforma para servicios de
              financiamiento o inversión, conforme a las políticas y términos
              establecidos en www.financia.al. Al aceptar los términos, Usted se
              compromete a cumplir con las disposiciones aquí descritas.
            </p>
          </li>
          <li className="text-sm font-inter pt-1">
            2. Documentación El Usuario declara que toda la documentación
            proporcionada es legítima, exacta y actual. La Plataforma se reserva
            el derecho de verificar la autenticidad de los documentos. Proveer
            documentación falsa será causa de terminación inmediata del servicio
            y posibles acciones legales.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-6 mt-2">
        <div className="flex gap-2">
        <input type="checkbox" className="" />
        <p className="text-sm font-semibold font-inter">
          Acepto los términos y condiciones
        </p>
        </div>
      <button onClick={handleClick} className="bg-[#396AD3] px-3 py-2 rounded-md text-white font-inter">Confirmar y Finalizar Registro</button>
      </div>
    </div>
  );
};

export default RegisterInfo;
