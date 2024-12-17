import { useState } from "react";
import { GoGraph } from "react-icons/go";
import { FaWallet } from "react-icons/fa";
import logo from "../../assets/icons/logoFinanciala.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useUserStore from "../../zustand/UserId";
import axios from "axios";

const Register = () => {
  const [activeTab, setActiveTab] = useState("INVERSOR");
  const setUserId = useUserStore((state) => state.setUserId);
  const navigate = useNavigate();
  const setUserLog = useUserStore((state) => state.setUserLog);

  console.log(setUserLog);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } =  useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      password2: "",
    },
  });
  const onSubmit = async (data) => {
    const payload = { ...data };
    try {
      const response = await axios.post(
        "http://149.50.139.181:9698/v1/api/user",
        payload
      );
      console.log(response.data);
      setUserId(response.data.idUser);
      setUserLog(activeTab);
      if (response.data.typeUser === "JURIDICA") {
        navigate("/documentLegal");
      } else {
        navigate("/document");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <section className="flex w-screen h-screen justify-between">
      <div className="flex flex-col items-center gap-3 p-10 w-[500px] bg-gradient-to-b from-[#6269F2] to-[#14163D] ">
        <img className="w-16 h-16" src={logo} alt="" />
        <h2 className="font-inter font-semibold text-3xl text-center text-white">
          Financiamos tus sueños,
          <br />
          potenciamos tus inversiones.
        </h2>
        <p className="font-inter font-extralight text-sm text-[#E8E8E8]">
          Simplificamos el camino hacia tus objetivos financieros
        </p>

        <ul className="relative flex flex-col items-start">
          <li className="flex items-center gap-1">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                  color="white"
                />
              </svg>
            </div>
            <p className="text-white font-inter text-sm">
              Proceso rápido y transparente
            </p>
          </li>
          <div className="ml-3 w-px h-5 bg-slate-500"></div>

          <li className="flex items-center gap-1">
            <div className="flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                  color="white"
                />
              </svg>
            </div>
            <p className="text-white font-inter text-sm">
              Todo el control en un solo lugar
            </p>
          </li>
          <div className="ml-3 w-px h-5 bg-slate-500"></div>

          <li className="flex items-center gap-1">
            <div className="flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                  color="white"
                />
              </svg>
            </div>
            <p className="text-white font-inter text-sm">Métricas y análisis</p>
          </li>

          <div className="ml-3 w-px h-5 bg-slate-500"></div>

          <li className="flex items-center gap-1">
            <div className="flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                  color="white"
                />
              </svg>
            </div>
            <p className="text-white font-inter text-sm">
              Simular interactivos
            </p>
          </li>

          <div className="ml-3 w-px h-5 bg-slate-500"></div>

          <li className="flex items-center gap-1">
            <div className="flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                  color="white"
                />
              </svg>
            </div>
            <p className="text-white font-inter text-sm">Máxima seguridad</p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center pr-60">
        <h1 className="text-2xl font-semibold mb-2">
          Crea tu cuenta para comenzar
        </h1>
        <div className="mb-2 w-full">
          <p className="text-sm font-medium font-inter mb-1">Busco:*</p>
          <div className="flex">
            <button
              onClick={() => setActiveTab("INVERSOR")}
              className={`w-full py-2 font-inter px-4 rounded-l-md border border-r-black flex items-center gap-1 border-gray-300 ${
                activeTab === "INVERSOR"
                  ? "bg-[#6269F2] text-white "
                  : "bg-white text-black"
              }`}
            >
              <GoGraph />
              Invertir
            </button>

            <button
              onClick={() => setActiveTab("PRESTAMO")}
              className={`w-full py-2 font-inter px-4 rounded-r-md border-l-black border border-gray-300 flex items-center gap-1 ${
                activeTab === "PRESTAMO"
                  ? "bg-[#6269F2] text-white"
                  : "bg-white text-black"
              }`}
            >
              <FaWallet />
              Financiamiento
            </button>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-72 flex flex-col gap-2"
        >
          <div>
            <label className="text-sm font-medium block mb-1">
              Tipo de Persona
            </label>
            <select
              {...register("typeUser", {
                required: "Selecciona un tipo de persona",
              })}
              className="w-full rounded-md border py-2 px-3 border-gray-300"
            >
              <option value="FISICA">Persona Física</option>
              <option value="JURIDICA">Persona Jurídica</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email no válido",
                },
              })}
              placeholder="ejemplo@correo.com"
              className="w-full rounded-md border py-2 px-3 border-gray-300"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Contraseña</label>
            <input
              type="password"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
              placeholder="********"
              className="w-full rounded-md border py-2 px-3 border-gray-300"
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              {...register("password2", {
                required: "Debes confirmar la contraseña",
                validate: (value) =>
                  value === watch("password") || "Las contraseñas no coinciden",
              })}
              placeholder="********"
              className="w-full rounded-md border py-2 px-3 border-gray-300"
            />
            {errors.password2 && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password2.message}
              </p>
            )}
          </div>
          <div className="flex items-start gap-1 mt-2">
            <input type="checkbox" className="mt-1" />
            <p className="text-xs text-gray-600 font-inter">
              Acepto y estoy de acuerdo con los{" "}
              <a href="#" className="text-[#6269F2] underline">
                Términos y Condiciones
              </a>{" "}
              y la{" "}
              <a href="#" className="text-[#6269F2] underline">
                Política de Privacidad
              </a>
              .
            </p>
          </div>
          <button
            disabled={!isValid}
            className={`mt-2 py-2 w-full font-medium rounded-md ${
              isValid
                ? "bg-[#6269F2] text-white"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            ¡Comienza hoy!
          </button>
        </form>
        <p className="mt-4 text-sm">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-[#6269F2] font-medium">
            Ingresar
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
