import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTableInfo = create(
  persist(
    (set) => ({
      tableData: [],
      setTable: (data) => set({ tableData: data }),
    }),
    {
      name: "table-data",
    }
  )
);

export default useTableInfo