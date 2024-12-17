import { TiDeleteOutline } from "react-icons/ti";
import { GoGraph } from "react-icons/go";
import { useForm } from "react-hook-form";
import axios from "axios";
import useUserStore from "../../../zustand/UserId";

//hacer la suma de monto a invertir x el tir
//al resultado lo tengo que multiplicar por los años que serian meses que nos da

const InvestmentModal = ({onClose}) => {
    const userPJ = useUserStore((state) => state.idPF);
    const {
        register,
        handleSubmit,
        formState: { IsValid },
        watch,
      } = useForm();
    
      const infoForm = watch();
      const deposit = parseFloat(infoForm.deposit) || 0; 
      const npayments = parseInt(infoForm.npayments) || 0;
      const tir = 1.1;
    
      const finalAmount = (deposit * tir) * (npayments / 12);

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
            `http://149.50.139.181:9698/v1/api/investment`,
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
          <GoGraph size={22} />
          <TiDeleteOutline
            size={22}
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        <h1 className="font-inter font-semibold">Nueva Inversion</h1>
        <p className="font-inter text-[#535862] text-xs">
        Completa los siguientes campos y confirma tu inversión.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col bg-[#F5F5F5] p-4 gap-2 border-[#D1D1D1] border rounded-md"
        >
          <label className="font-inter">Monto a Invertir</label>
          <input
            {...register("deposit", { required: true })}
            className="rounded-lg border py-2 px-3 border-gray-300"
            type="text"
            placeholder="$"
          />
          <label className="font-inter">Plazo (En meses)</label>
          <input
            {...register("npayments", { required: true })}
            className="rounded-lg border py-2 px-3 border-gray-300"
            type="text"
            placeholder="ejemplo:12 meses"
          />
          <label className="font-inter">Nombre</label>
          <input
            {...register("name", { required: true })}
            className="rounded-lg border py-2 px-3 border-gray-300"
            type="text"
            placeholder="Asígnale un nombre a tu inversión"
          />
          <label className="font-inter">TIR (Tasa interna de retorno)</label>
          <p className="font-inter text-sm">{tir}%</p>
          <label className="font-inter">Monto Final Estimado...</label>
          <p className="font-inter text-sm">{finalAmount.toFixed(2)}</p>
        </form>
        <button onClick={handleConfirmForm} 
         className="bg-[#396AD3] text-white px-4 py-2 rounded">
          Confirmar nueva Inversion
        </button>
      </div>
    </div>
  )
}

export default InvestmentModal