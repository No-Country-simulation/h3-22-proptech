import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
} from "@tremor/react";
import useTableInfo from "../../zustand/TableInfo";
import { useEffect } from "react";

const TableComplete = () => {
  const tableData = useTableInfo((state) => state.tableData);
  useEffect(()=>{
    
  })
  console.log(tableData);

  return (
    <div className="p-20">
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
          {tableData.map((row, index) => {
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
    </div>
  );
};

export default TableComplete;
