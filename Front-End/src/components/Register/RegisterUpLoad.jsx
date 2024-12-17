import { useEffect } from "react";
import { useRegFormContext } from "../../Context/RegFromProvider";
import ProgresBar from "../ProgresBar/ProgresBar";
import imgPig from "../../assets/img/flat-lay-real-estate-concept 1.png";
import { useForm } from "react-hook-form";
import { IoDocumentText } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const RegisterUpLoad = () => {
  const [, dispatch] = useRegFormContext();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  useEffect(() => {
    dispatch({ type: "CHANGE_PERCENT", data: 100 });
  }, []);

  const onSubmit = (values) => {
    if (isValid) {
      dispatch({ type: "SET_UPLOAD_DATA", data: values });
    }
  };

  return (
    <div className="flex">
      <img
        className=" h-screen w-[550px] object-cover"
        src={imgPig}
        alt="Imagen lateral"
      />

      <div className="flex flex-col items-center justify-evenly w-[500px] ml-36">
        <h1 className="text-lg font-semibold">Crea tu cuenta para comenzar</h1>
        <div className="mt-3">
          <ProgresBar />
          <p className="text-center font-inter text-sm font-bold mt-4">
            Documentación
          </p>
        </div>
        <form
          className="flex flex-col gap-2 w-[420px] px-3 py-2 bg-[#F5F5F5] border-[#D1D1D1] border rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <h3 className="text-xs font-inter text-[#454545] text-center mb-2">
              Por favor, adjunta los documentos
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-xs font-inter text-[#3C3C3C] mb-1">
                  DNI (Frente)
                </label>
                <label className="flex items-center pl-2 border bg-white border-dashed border-gray-400 py-2 rounded-md cursor-pointer">
                  <IoDocumentText className="text-xl text-[#C7C7C7] mr-2" />
                  <span className="text-[#7E7E7E] font-inter">Adjuntar</span>
                </label>
                <input
                  {...register("dniFrente", { required: true })}
                  id="dniFrente"
                  type="file"
                  className="hidden"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-inter text-[#3C3C3C] mb-1">
                  DNI (Dorso)
                </label>
                <label className="flex items-center pl-2 border bg-white border-dashed border-gray-400 py-2 rounded-md cursor-pointer">
                  <IoDocumentText className="text-xl text-[#C7C7C7] mr-2" />
                  <span className="text-[#7E7E7E] font-inter">Adjuntar</span>
                </label>
                <input
                  {...register("dniDorso", { required: true })}
                  id="dniDorso"
                  type="file"
                  className="hidden"
                />
              </div>
            </div>
          </div>

          <div className="mt-1">
            <h3 className="font-inter text-xs font-semibold text-[#3C3C3C]">
              Recibos de Sueldo
            </h3>
            <p className="font-inter text-xs text-[#858585] mt-1">
              Adjunta tus últimos 3 recibos de sueldo.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-2">
              {Array(3)
                .fill()
                .map((_, index) => (
                  <div key={index} className="flex flex-col">
                    <label className="flex flex-col gap-1 items-center pl-2 border bg-white border-gray-400 py-3 rounded-md">
                      <IoDocumentText className="text-xl text-[#C7C7C7] mr-2" />
                      <div className="border border-[#165BAA] px-1 rounded-md cursor-pointer">
                        <span className="text-[#262626] font-medium font-inter">
                          Examinar
                        </span>
                        <input
                          {...register(`reciboSueldo${index + 1}`, {
                            required: true,
                          })}
                          type="file"
                          className="hidden"
                        />
                      </div>
                    </label>
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-1">
            <h3 className="font-inter text-xs font-semibold text-[#3C3C3C]">
              Garantes
            </h3>
            <p className="font-inter text-xs text-[#858585] mt-1">
              Adjunta el documento de los 3 garantes necesarios.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-2">
              {Array(3)
                .fill()
                .map((_, index) => (
                  <div key={index} className="flex flex-col">
                    <label className="flex flex-col gap-1 items-center pl-2 border bg-white border-gray-400 py-3 rounded-md">
                      <IoDocumentText className="text-xl text-[#C7C7C7] mr-2" />
                      <div className="border border-[#165BAA] px-1 rounded-md cursor-pointer">
                        <span className="text-[#262626] font-medium font-inter">
                          Examinar
                        </span>
                        <input
                          {...register(`garanteDoc${index + 1}`, {
                            required: true,
                          })}
                          type="file"
                          className="hidden"
                        />
                      </div>
                    </label>
                  </div>
                ))}
            </div>
          </div>

          <a href="" className="text-[#6269F2] font-inter text-xs">
            Documentación para garantes
          </a>
          <div>
            <h3 className="font-inter text-xs font-semibold text-[#3C3C3C]">
              Comprobante de Servicio
            </h3>
            <p className="font-inter text-xs text-[#858585]">
              Adjunta un comprobante de servicio que esté a tu nombre.
            </p>
          </div>

          <div className="flex flex-col">
            <label className="flex gap-1 items-center pl-2 border bg-white border-gray-400 py-2 rounded-md">
              <IoDocumentText className="text-xl text-[#C7C7C7] mr-2" />
              <div className="px-1 rounded-md cursor-pointer">
                <span className="text-[#7E7E7E] font-inter">
                  Adjuntar Documento
                </span>
                <input
                  {...register("comprobanteServicio", { required: true })}
                  type="file"
                  className="hidden"
                />
              </div>
            </label>
          </div>
        </form>
        <div className="flex justify-evenly w-full items-center">
          <Link to="/documentInfo">
          <button
            type="submit"
            className="bg-blue-600 text-white text-sm font-inter px-4 py-2 rounded-md hover:bg-blue-700"
            disabled= {isValid}
            >
            Guardar Documentación
          </button>
          </Link>
          <Link to="/documentInfo">
          <button
            type="button"
            className="text-[#6269F2] flex gap-1 items-center font-inter text-sm"
            >
            Omitir por ahora
            <IoIosArrowForward className="mt-1"/>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterUpLoad;
