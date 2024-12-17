import { createContext, useContext, useReducer } from "react";

const RegFromContext = createContext();


const initialState = {
  common: {}, // Datos iniciales comunes
  address: {}, // Datos de dirección
  upLoad: {}, // Datos de subida
  percent: 0, // Progreso inicial en 0%
};

export const useRegFormContext = () => {
  return useContext(RegFromContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COMMON_DATA": {
      return { ...state, common: { ...action.data } };
    }
    case "SET_ADDRESS_DATA": {
      return { ...state, address: { ...action.data } };
    }
    case "SET_UPLOAD_DATA": {
      return { ...state, upLoad: { ...action.data } };
    }
    case "CHANGE_PERCENT": {
      return { ...state, percent: action.data };
    }
  }
  return state;
};

const RegFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RegFromContext.Provider value={[state, dispatch]}>
      {children}
    </RegFromContext.Provider>
  );
};

export default RegFormProvider;
