import logo from "../../assets/icons/logoFinanciala.svg";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../zustand/UserId";
import { useState } from "react";
const NavBar = () => {
  const idUser = useUserStore((state) => state.idUser);
  const clearUserId = useUserStore((state) => state.clearUserId);
  const [isOpen, setIsOpen] = useState(false);
  //const clearIdPj = useUserStore((state))
  const navigate = useNavigate()


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    clearUserId();
    console.log("Usuario deslogueado");
    navigate("/")
  };

  return (
    <nav className="flex justify-around items-center shadow">
      <div className="">
        <Link to="/">
        <a>
        <img className="w-10 h-10" src={logo} alt="" />
        </a>
        </Link>
      </div>
      <div className="hidden lg:flex flex-none">
        <ul className=" flex gap-6 p-5 text-sm font-medium">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a>¿Cómo funciona?</a>
          </li>
          <li>
            <a href="#">Inversionistas</a>
          </li>
          <li>
            <a href="#">Compradores</a>
          </li>
          <li>
            <a href="#">Beneficios</a>
          </li>
          <li>
            <a href="#">Preguntas Frecuentes</a>
          </li>
        </ul>
      </div>

      <div className="flex-none">
        {!idUser ? (
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-gray-600">
              Ingresar
            </Link>
            <Link
              to="/register"
              className=" bg-[#396AD3] text-white font-inter text-sm py-2 px-3 rounded-md"
            >
              ¡Comienza hoy!
            </Link>
          </div>
        ) : (
          <div className="relative">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar focus:outline-none"
            >
              <button
                onClick={toggleMenu}
                className="btn btn-ghost btn-circle avatar focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold">
                  M
                </div>
              </button>
            </label>
            {isOpen && (
            <ul
              tabIndex={0}
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md divide-y divide-gray-100 focus:outline-none z-10"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  Perfil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  Ajustes
                </a>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-500 transition-colors"
                >
                  Cerrar sesión
                </button>
              </li>
            </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
