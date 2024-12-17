import { TiDeleteOutline } from "react-icons/ti";
import { FaWallet } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import useUserStore from "../../../zustand/UserId";

const BuyerModal = ({ onClose }) => {
  const userPJ = useUserStore((state) => state.idPF);

  const {
    register,
    handleSubmit,
    formState: { IsValid },
    watch,
  } = useForm();

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const onSubmit = async (data) => {
    const payment = {
      ...data,
      idPersona: userPJ,
    };
    try {
      const response = await axios.post(
        `http://149.50.139.181:9698/v1/api/loan`,
        payment
      );
      console.log(response.data);
      onClose()
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirmForm = () => {
    handleSubmit(onSubmit)();
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="flex flex-col bg-white p-5 w-[490px] rounded-lg gap-2"
        onClick={handleModalClick}
      >
        <div className="flex items-center justify-between">
          <FaWallet size={22} />
          <TiDeleteOutline
            size={22}
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        <h1 className="font-inter font-semibold">Nueva Credito</h1>
        <p className="font-inter text-[#535862] text-xs">
          Completa los siguientes campos y confirma tu credito{" "}
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col bg-[#F5F5F5] p-4 border-[#D1D1D1] border rounded-md"
        >
          <label>Monto a solicitar</label>
          <input
            {...register("capital", { required: true })}
            className="rounded-lg border py-2 px-3 border-gray-300"
            type="text"
          />
          <label>Cuotas</label>
          <input
            {...register("nPayments", { required: true })}
            className="rounded-lg border py-2 px-3 border-gray-300"
            type="text"
          />
          <label>TNA (Tasa Nominal Anual)</label>
          <input
            {...register("tna", { required: true })}
            className="rounded-lg border py-2 px-3 border-gray-300"
            type="text"
          />
          <label>Nombre</label>
          <input
            {...register("name", { required: true })}
            className="rounded-lg border py-2 px-3 border-gray-300"
            type="text"
          />
        </form>
        <button onClick={handleConfirmForm} className="bg-[#396AD3] text-white px-4 py-2 rounded">
          Confirmar nueva credito
        </button>
      </div>
    </div>
  );
};

export default BuyerModal;
