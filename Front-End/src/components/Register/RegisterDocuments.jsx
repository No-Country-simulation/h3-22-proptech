import imgPeople from "../../assets/img/medium-shot-blurry-couple-indoors 2.png";
import { useForm } from "react-hook-form";
import { useRegFormContext } from "../../Context/RegFromProvider";
import ProgresBar from "../ProgresBar/ProgresBar";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useUserStore from "../../zustand/UserId";

const RegisterDocuments = () => {
  const [, dispatch] = useRegFormContext();
  const idUser = useUserStore((state) => state.idUser)
  const setIdPf = useUserStore((state) => state.setIdPf);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({ type: "CHANGE_PERCENT", data: 0 });
  }, []);
  
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    watch
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      lastName: "",
      birthDate: "",
      dni: "",
      nacionality: "",
      phone: "",
    },
  });;

  const onSubmit = async (data) => {
    if (!idUser) {
      console.error("No se encontro el idUser");
      return;
    }
    const payload = {
      ...data,
      idUser,
    };

    try {
      const response = await axios.post(
        "http://149.50.139.181:9698/v1/api/personaFisica",
        payload
      );
      const { idPF } = response.data; 
      console.log("Datos enviados:", response.data);
      setIdPf(idPF);
      navigate("/document1")
    } catch (error) {
      console.error(error);
    }
  }

  const handleNext = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div className="flex justify-between">
      <div className="">
        <img
          className="h-screen w-[550px] object-cover"
          src={imgPeople}
          alt=""
        />
      </div>

      <div className="flex flex-col items-center justify-evenly w-[450px] mr-44">
        <h1 className="text-2xl font-semibold">Crea tu cuenta para comenzar</h1>
        <div className="mt-3">
          <ProgresBar />
          <p className="text-center font-inter font-bold mt-6">
            Datos personales
          </p>
        </div>
        <form
          className="flex flex-col gap-1 w-[500px] bg-[#F5F5F5] p-4 border-[#D1D1D1] border rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="font-inter text-center">Completa todos los campos</h3>
          <div className="flex gap-2 justify-center">
            <div className="">
              <label className="font-inter">Nombre</label>
              <input
                {...register("name", {
                  required: "El nombre es obligatorio",
                })}
                className="w-full rounded-lg border py-2 px-3 border-gray-300"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
            </div>
            <div className="">
              <label className="font-inter">Apellido</label>
              <input
                {...register("lastName", {
                  required: "El apellido es obligatorio",
                })}
                className="w-full rounded-lg border py-2 px-3 border-gray-300"
              />
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
            </div>
          </div>
          <div className="">
            <label className="font-inter">Fecha de nacimiento</label>
            <input
              type="date"
              {...register("birthDate", { required: "La fecha de nacimiento es obligatoria" })}
              className="w-full border px-3 py-2 rounded-lg"
            />
            {errors.birthDate && <p className="text-red-500 text-xs">{errors.birthDate.message}</p>}
          </div>
          <div className="">
            <label className="font-inter">DNI</label>
            <input
              {...register("dni", {
                required: "El DNI es obligatorio",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "El DNI solo puede contener números"
                },
              })}
              className="w-full border px-3 py-2 rounded-lg"
            />
            {errors.dni && <p className="text-red-500 text-xs">{errors.dni.message}</p>}
          </div>
          <div className="">
            <label className="font-inter">Nacionalidad</label>
            <input
              {...register("nacionality", {
                required: "La nacionalidad es obligatoria",
              })}
              className="w-full border px-3 py-2 rounded-lg"
            />
            {errors.nacionality && <p className="text-red-500 text-xs">{errors.nacionality.message}</p>}
          </div>
          <div className="">
            <label className="font-inter">Telefono/Celular</label>
            <input
              {...register("phone", {
                required: "El teléfono es obligatorio",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "El teléfono solo puede contener números",
                },
              })}
              className="w-full border px-3 py-2 rounded-lg"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
        </form>
          <button
            disabled={!isValid}
            className={`mt-2 py-2 w-full font-medium rounded-md ${
              isValid
                ? "bg-[#6269F2] text-white"
                : "bg-gray-300 text-gray-500"
            }`}
            onClick={handleNext}
          >
            Siguiente
          </button>
      </div>
    </div>
  );
};

export default RegisterDocuments;
