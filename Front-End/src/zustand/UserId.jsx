import {create} from "zustand";
import {persist} from "zustand/middleware"

const useUserStore = create(
  persist(
    (set) => ({
      idUser: null,
      setUserId: (id) => set({ idUser: id }),
      clearUserId: () => set({ idUser: null }),
      idPF: null,
      setIdPf: (id) => set({ idPF: id }),
      clearIdPf: () =>({idPf: null}),
      idPJ: null,
      setIdPj: (id) => set({ idPJ: id }),
      clearIdPj: () =>({idPJ: null}),
      userLog: null,
      setUserLog: (type) => set({ userLog: type }),
    }),
    {
      name: 'user-storage', 
    }
  )
);

export default useUserStore
