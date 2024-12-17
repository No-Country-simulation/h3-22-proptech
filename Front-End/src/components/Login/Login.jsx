import React from "react";
import ImgProptech from "../../assets/img/ImageProptech.png";
import logo from "../../assets/icons/logoFinanciala.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <div className="flex justify-between">
      <div>
        <img
          className="h-screen w-[502px] object-cover"
          src={ImgProptech}
          alt=""
        />
      </div>
      <section className="flex flex-col justify-around w-[60%] items-center">
        <div className="flex flex-col items-center gap-5">
          <img className="w-16 h-16" src={logo} alt="" />
          <h2 className="font-semibold text-2xl">
            Ingresa a tu cuenta de Financia
          </h2>
          <form className="flex flex-col w-full gap-3">
            <label>Email</label>
            <input
              type="text"
              className="rounded-md border py-1 border-[#D9D9D9]"
            />
            <div className="flex justify-between items-center">
              <label>Contraseña</label>
              <a href="" className="text-[#6269F2] text-sm">
                ¿No recuerdas la contraseña?
              </a>
            </div>
            <input
              type="text"
              className="rounded-md border py-1 border-[#D9D9D9]"
            />
              <Link to="/dashboard">
            <button
              className="py-2 w-full text-white rounded-lg bg-[#6269F2]"
              >
              Iniciar Sesion
            </button>
            </Link>
            <p className="font-semibold text-sm">
              ¿Eres nuevo en Financia?{" "}
              <Link to="/register" className="text-[#6269F2] font-normal">
                Crear cuenta
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="text-center text-xs font-inter">
            Copyright © 2024 Financia
          </p>
          <a href="" className="text-xs font-inter font-bold">
            Terminos y Condiciones
          </a>{" "}
          <a href="" className="text-xs font-inter font-bold">
            Políticas de Privacidad
          </a>
        </div>
      </section>
    </div>
  );
};

export default Login;
