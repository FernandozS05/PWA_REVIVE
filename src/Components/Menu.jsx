import React, { useContext, useState, useEffect, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { ChevronLast, ChevronFirst, ChevronDown } from "lucide-react";
import Logo from "./img/Imagen1.png";
import Reserva from "./img/reserva.png";
import Vivero from "./img/vivero.png";
import Usuarios from "./img/usuarios.png";
import Salir from "./img/logout.png";
import Recolecta from "./img/recolecta.png";
import Recepcion from "./img/recepcion.png";
import Beneficiado from "./img/beneficiado.png";
import Viabilidad from "./img/viabilidad.png";
import Tratamiento from "./img/tratamiento.png";
import Almacenamiento from "./img/almacenamiento.png";
import Distribucion from "./img/distribucion.png";
import Calendario from "./img/calendario.png";
import Siembra from "./img/siembra.png";
import Evaluacion from "./img/evaluacion.png";
import Salida from "./img/salida.png";
import ArbolCampeon from "./img/arbol.png";
import Donacion from "./img/donacion.png";
import Desecho from "./img/desecho.png";
import Seguimiento from "./img/seguimiento.png";

const SidebarContext = createContext();

export default function Menu() {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState("Reserva de Semillas");
  const [activeSubItem, setActiveSubItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setExpanded(true);
  }, [location]);

  function handleItemClick(item, route) {
    setActiveItem(item);
    setActiveSubItem(null);
    if (route) navigate(route);
  }

  function handleSubItemClick(subItem, route) {
    setActiveSubItem(subItem);
    if (route) navigate(route);
  }

  const handleLogout = () => {
    Swal.fire({
      title: "¿Está seguro de que desea cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("tokenUsuario");
        navigate("/login");
      }
    });
  };

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <aside
      className={`h-screen transition-all ${
        expanded ? "w-64" : "w-16"
      } bg-white border-r shadow-sm`}
    >
      <nav className="h-full flex flex-col">
        <div
          className="p-4 pb-2 flex justify-between items-center"
          style={{ background: "linear-gradient(to bottom, #53AC59, #FFFFFF)" }}
        >
          <img
            src={Logo}
            className={`transition-all ${
              expanded ? "h-16" : "h-0"
            } overflow-hidden`}
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-2 rounded-full text-white transition-all"
            style={{
              backgroundColor: "#6BB26E",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 overflow-y-auto">
            <SidebarItem
              icon={<img src={Reserva} alt="Reserva" />}
              text="Reserva de Semillas"
              active={activeItem === "Reserva de Semillas"}
              onClick={() =>
                handleItemClick("Reserva de Semillas", "/catalogo")
              }
              subcategories={[
                {
                  text: "Recolecta",
                  icon: <img src={Recolecta} alt="Recolecta" />,
                  onClick: () =>
                    handleSubItemClick("Recolecta", "/listadoRecolectas"),
                },
                {
                  text: "Recepción",
                  icon: <img src={Recepcion} alt="Recepción" />,
                  onClick: () =>
                    handleSubItemClick("Recepción", "/listadoLotes"),
                },
                {
                  text: "Beneficiado",
                  icon: <img src={Beneficiado} alt="Beneficiado" />,
                  onClick: () =>
                    handleSubItemClick("Beneficiado", "/listadoBeneficiado"),
                },
                {
                  text: "Viabilidad",
                  icon: <img src={Viabilidad} alt="Viabilidad" />,
                  onClick: () =>
                    handleSubItemClick("Viabilidad", "/listadoViabilidad"),
                },
                {
                  text: "Tratamiento",
                  icon: <img src={Tratamiento} alt="Tratamiento" />,
                  onClick: () =>
                    handleSubItemClick("Tratamiento", "/listadoTratamientos"),
                },
                {
                  text: "Almacenamiento",
                  icon: <img src={Almacenamiento} alt="Almacenamiento" />,
                  onClick: () =>
                    handleSubItemClick(
                      "Almacenamiento",
                      "/listadoAlmacenamiento"
                    ),
                },
                {
                  text: "Distribución",
                  icon: <img src={Distribucion} alt="Distribución" />,
                  onClick: () =>
                    handleSubItemClick("Distribución", "/listadoDistribucion"),
                },
              ]}
              activeSubItem={activeSubItem}
            />
            <SidebarItem
              icon={<img src={Vivero} alt="Vivero" />}
              text="Vivero"
              active={activeItem === "Vivero"}
              onClick={() => handleItemClick("Vivero", "/vivero")}
              subcategories={[
                {
                  text: "Calendario Fenológico",
                  icon: <img src={Calendario} alt="Calendario Fenológico" />,
                  onClick: () =>
                    handleSubItemClick(
                      "Calendario Fenológico",
                      "/calendario"
                    ),
                },
                {
                  text: "Siembra",
                  icon: <img src={Siembra} alt="Siembra" />,
                  onClick: () =>
                    handleSubItemClick(
                      "Siembra",
                      "/vivero/siembra"
                    ),
                },
                {
                  text: "Evaluación",
                  icon: <img src={Evaluacion} alt="Evaluación" />,
                  onClick: () =>
                    handleSubItemClick(
                      "Evaluación",
                      "/vivero/evaluacion"
                    ),
                },
                {
                  text: "Salida",
                  icon: <img src={Salida} alt="Salida" />,
                  onClick: () =>
                    handleSubItemClick(
                      "Salida",
                      "/vivero/salida"
                    ),
                },
                {
                  text: "Árbol Campeón",
                  icon: <img src={ArbolCampeon} alt="Árbol Campeón" />,
                  onClick: () =>
                    handleSubItemClick(
                      "Árbol Campeón",
                      "/vivero/arbolCampeon"
                    ),
                },
                {
                  text: "Donación",
                  icon: <img src={Donacion} alt="Donación" />,
                  onClick: () =>
                    handleSubItemClick(
                      "Donación",
                      "/vivero/donacion"
                    ),
                },
                {
                  text: "Desecho",
                  icon: <img src={Desecho} alt="Desecho" />,
                  onClick: () =>
                    handleSubItemClick(
                      "Desecho",
                      "/vivero/desecho"
                    ),
                },
                {
                  text: "Seguimiento a Clientes",
                  icon: <img src={Seguimiento} alt="Seguimiento a Clientes" />,
                  onClick: () =>
                    handleSubItemClick(
                      "Seguimiento a Clientes",
                      "/vivero/seguimiento"
                    ),
                },
              ]}
              activeSubItem={activeSubItem}
            />
            <SidebarItem
              icon={<img src={Usuarios} alt="Usuarios" />}
              text="Usuarios"
              active={activeItem === "Usuarios"}
              onClick={() => handleItemClick("Usuarios", "/listadoUsuarios")}
            />
            <SidebarItem
              icon={<img src={Salir} alt="Logout" />}
              text="Cerrar Sesión"
              active={activeItem === "Cerrar Sesión"}
              onClick={handleLogout}
            />
          </ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  onClick,
  subcategories = [],
  activeSubItem,
}) {
  const { expanded } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative">
      <div
        onClick={() => {
          onClick();
          if (subcategories.length) setIsOpen((curr) => !curr);
        }}
        className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? "bg-green-100 text-green-800"
            : "hover:bg-green-50 text-gray-600"
        }`}
      >
        <div
          className="flex items-center justify-center shrink-0"
          style={{
            width: "24px",
            height: "24px",
            minWidth: "24px",
            minHeight: "24px",
          }}
        >
          {icon}
        </div>
        <span
          className={`ml-3 transition-all overflow-hidden whitespace-nowrap ${
            expanded ? "w-36" : "w-0"
          }`}
        >
          {text}
        </span>
        {subcategories.length > 0 && expanded && (
          <ChevronDown
            size={16}
            className={`ml-auto transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>
      {isOpen && subcategories.length > 0 && (
        <ul className="pl-10">
          {subcategories.map((subcategory, index) => (
            <li
              key={index}
              onClick={subcategory.onClick}
              className={`flex items-center py-1 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
                activeSubItem === subcategory.text
                  ? "bg-green-100 text-green-800"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <div
                className="flex items-center justify-center shrink-0 mr-2"
                style={{
                  width: "24px",
                  height: "24px",
                  minWidth: "24px",
                  minHeight: "24px",
                }}
              >
                {subcategory.icon}
              </div>
              {subcategory.text}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
