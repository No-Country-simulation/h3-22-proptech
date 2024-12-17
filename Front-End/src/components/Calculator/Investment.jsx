import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
} from "@tremor/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useTableInfo from "../../zustand/TableInfo";
import { Link } from "react-router-dom";

//22000, 24, 11,2

const Investment = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);
  const { setTable } = useTableInfo();




  const onSubmit = async (formData) => {
    const { monto, cuotas, tna } = formData;
    try {
      const response = await axios.get(
        `http://149.50.139.181:9698/v1/api/loan/simulation`,
        {
          params: {
            capital: monto,
            nPayments: cuotas,
            TNA: tna,
          },
        }
      );
      const allData = response.data;
      const firstFour = allData.slice(0, 4);
      const lastTwo = allData.slice(-2);
      setData([...firstFour, ...lastTwo]);
      setTable(allData);
    } catch (error) {
      console.log(error);
    }
  };

  const exampleData = [
    {
      nroFee: "1",
      capital: 10000,
      amortization: 200,
      interest: 50,
      fee: 250,
    },
    {
      nroFee: "2",
      capital: 9800,
      amortization: 200,
      interest: 49,
      fee: 249,
    },
    {
      nroFee: "3",
      capital: 9800,
      amortization: 200,
      interest: 49,
      fee: 249,
    },
    {
      nroFee: "4",
      capital: 9800,
      amortization: 200,
      interest: 49,
      fee: 249,
    },
  ];

  return (
    <div className="flex justify-between p-8">
      <div className="flex flex-col justify-evenly ml-5">
        <h3 className="font-inter font-semibold text-white text-3xl">
          Simulador de Financiamiento
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 w-64"
        >
          <label className="text-white font-inter text-sm">Monto*</label>
          <input
            {...register("monto", { required: true })}
            type="text"
            className="bg-white px-3 py-2 rounded-md"
          />
          <label className="text-white font-inter text-sm">Cuotas*</label>
          <input
            {...register("cuotas", { required: true })}
            type="text"
            className="bg-white px-3 py-2 rounded-md"
          />
          <label className="text-white font-inter text-sm">TNA(%)*</label>
          <input
            {...register("tna", { required: true })}
            type="text"
            className="bg-white px-3 py-2 rounded-md"
          />
          <button className=" flex items-center justify-between w-52 rounded-md py-2 px-4 bg-[#D9FB41]">
            Calcular <IoIosArrowForward />
          </button>
          <p className=" text-[#EEEEEE] font-inter w-96 pt-6 text-[10px]">
            Descubre cómo nuestro sistema estima los rendimientos
          </p>
        </form>
      </div>

      <div className="w-[700px]">
        <Link to="/tableComplete">
          <p className="text-end text-white p-2">Ver completo</p>
        </Link>
        <Table className="bg-white rounded-md shadow">
          <TableHead className="bg-[#EDEDED]">
            <TableRow className="border border-gray-800">
              <TableHeaderCell className=" font-inter border border-gray-500">
                Cuota Nº
              </TableHeaderCell>
              <TableHeaderCell className=" font-inter border border-gray-500">
                Capital Inicial
              </TableHeaderCell>
              <TableHeaderCell className=" font-inter border border-gray-500">
                Amortización
              </TableHeaderCell>
              <TableHeaderCell className=" font-inter border border-gray-500">
                Interés
              </TableHeaderCell>
              <TableHeaderCell className=" font-inter border border-gray-500">
                Pago Total
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(data.length > 0 ? data : exampleData).map((row, index) => {
               if (data.length > 0 && index >= data.length - 2) {
                row.nroFee = `...${row.nroFee}`;
              }
              return (
                <TableRow key={index}>
                  <TableCell className="border border-[#5B5B5B] font-inter">
                    {row.nroFee}
                  </TableCell>
                  <TableCell className="border border-[#5B5B5B] font-inter">
                    {row.capital}
                  </TableCell>
                  <TableCell className="border border-[#5B5B5B] font-inter">
                    {row.amortization}
                  </TableCell>
                  <TableCell className="border border-[#5B5B5B] font-inter">
                    {row.interest}
                  </TableCell>
                  <TableCell className="border border-[#5B5B5B] font-inter">
                    {row.fee}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className="flex justify-end pt-5 gap-5">
          <button className="bg-[#D9FB41] px-7 py-2 rounded-md font-inter">
            <Link to="/register">
            Quiero mi simulacion
            </Link>
          </button>
          <a href="http://149.50.139.181:9698/v1/api/loan/reporte?capital=22000&nPayments=24&TNA=11.2" className="border border-white px-9 py-2  rounded-md font-inter text-white">
            Imprimir PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Investment;
