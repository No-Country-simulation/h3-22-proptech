import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRegFormContext } from "../../Context/RegFromProvider";
import people2 from "../../assets/img/couple-holding-small-house-medium-shot 1.png";
import ProgresBar from "../ProgresBar/ProgresBar";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../zustand/UserId";
import axios from "axios";

const RegisterLocation = () => {
  const [, dispatch] = useRegFormContext();
  const idPF = useUserStore((state) => state.idPF)
  console.log(idPF);
  
  const {
    register,
    handleSubmit,
    formState: { IsValid },
    watch
  } = useForm();

  const infoForm = watch()

  console.log(infoForm);

  const navigate = useNavigate()
  

  useEffect(() => {
    dispatch({ type: "CHANGE_PERCENT", data: 50 });
  }, []);

  const onSubmit = async (data) => {
    if (!idPF) {
      console.error("No se encontro el idPF");
      return;
    }
    const payload = {
      ...data,
      idPF,
    };

    try {
      const response = await axios.put(
        "http://149.50.139.181:9698/v1/api/personaFisica/update",
        payload
      );
      console.log("Datos enviados:", response.data);
      navigate("/document2")
    } catch (error) {
      console.error(error);
    }
  };

  const handleNext = () => {
    handleSubmit(onSubmit)();
  };
  return (
    <div className="flex justify-between">
      <div className="">
        <img className="h-screen w-[550px] object-cover" src={people2} alt="" />
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
          className="flex flex-col gap-2 w-[500px] bg-[#F5F5F5] p-5 border-[#D1D1D1] border rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="font-inter text-center">Completa todos los campos</h3>

          <div className="">
            <label className="font-inter">Provincia</label>
            <input
              {...register("provincia", { required: true })}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
          <div className="">
            <label className="font-inter">Localidad</label>
            <input
              {...register("localidad", { required: true })}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
          <div className="">
            <label className="font-inter">Calle</label>
            <input
              {...register("address", { required: true })}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
            <div className="">
              <label className="font-inter">Codigo Poatal</label>
              <input
                {...register("postalCode", { required: true })}
                className="w-full rounded-md border py-2 px-3 border-gray-300"
              />
            </div>
        </form>
          <button
            type="submit"
            className="bg-[#396AD3] text-white px-4 py-2 rounded w-80"
            onClick={handleNext}
          >
            Siguiente
          </button>
      </div>
    </div>
  );
};

export default RegisterLocation;
