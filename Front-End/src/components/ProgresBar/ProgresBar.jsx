import { useRegFormContext } from "../../Context/RegFromProvider";
import { FaLocationDot } from "react-icons/fa6";
import { CgFileDocument } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import React from "react";

const ProgresBar = () => {
  const [state] = useRegFormContext();

  const steps = [
    { icon: <FaUser /> },
    { icon: <FaLocationDot />, percent: 42 },
    { icon: <CgFileDocument />, percent: 63 },
  ];

  return (
    <div className="relative w-96">
      {/* Barra de fondo */}
      <div className="w-full bg-[#D9D9D9] rounded-full h-1 relative">
        {/* Barra de progreso */}
        <div
          className="bg-[#6269F2] h-1 rounded-full transition-all"
          style={{ width: `${state.percent}%` }}
        ></div>
      </div>

      {/* Contenedor de íconos */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-1 rounded-full ${
              index === 0 || state.percent >= step.percent
                ? "bg-[#6269F2]"
                : "bg-gray-400"
            }`}
          >
            {React.cloneElement(step.icon, {
              color:
                index === 0 || state.percent >= step.percent
                  ? "#ffffff"
                  : "#4F4F4F",
              size: 20,
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgresBar;
