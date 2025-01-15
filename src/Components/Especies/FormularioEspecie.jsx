import React, { useState } from "react";
import NombreComun from "../img/nombrecomun.png";
import NombreCientifico from "../img/nombrecientifico.png";
import Familia from "../img/familia.png";
import Categoria from "../img/categoria.png";
import Clima from "../img/clima.png";
import Genero from "../img/genero.png";
import Descripcion from "../img/descripcion.png";
import Img from "../img/img.png";
import Precio from "../img/precio.png";
import TipoSemilla from "../img/tiposemilla.png";
import Caracteristicas from "../img/caracteristicas.png";
import Fecha from "../img/fecha.png";
import Guardar from "../img/guardar.png";
import Cancelar from "../img/cancelar.png";

const FormularioEspecie = ({ onAgregarEspecie }) => {
  const [formData, setFormData] = useState({
    common_name: "",
    scientific_name: "",
    family: "",
    categories: [],
    climates: [],
    genus: "",
    description: "",
    image: "",
    price_per_kg: "",
    seed_type: "",
    characteristics: { barkColor: "", averageHeight: "" },
    registration_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgregar = () => {
    onAgregarEspecie({ ...formData, id: Date.now() });
    setFormData({
      common_name: "",
      scientific_name: "",
      family: "",
      categories: [],
      climates: [],
      genus: "",
      description: "",
      image: "",
      price_per_kg: "",
      seed_type: "",
      characteristics: { barkColor: "", averageHeight: "" },
      registration_date: "",
    });
  };

  return (
    <div className="p-6 border border-green-400 rounded">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        Agregar Especie
      </h2>
      <form>
        {/* Nombre Común */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Nombre Común:
          </label>
          <div className="flex items-center gap-2">
            <img src={NombreComun} alt="Nombre Común" className="w-6 h-6" />
            <input
              type="text"
              name="common_name"
              value={formData.common_name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Nombre Científico */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Nombre Científico:
          </label>
          <div className="flex items-center gap-2">
            <img src={NombreCientifico} alt="Nombre Científico" className="w-6 h-6" />
            <input
              type="text"
              name="scientific_name"
              value={formData.scientific_name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Familia */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">Familia:</label>
          <div className="flex items-center gap-2">
            <img src={Familia} alt="Familia" className="w-6 h-6" />
            <input
              type="text"
              name="family"
              value={formData.family}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Categorías */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Categorías:
          </label>
          <div className="flex items-center gap-2">
            <img src={Categoria} alt="Categorías" className="w-6 h-6" />
            <select
              name="categories"
              value={formData.categories}
              onChange={(e) =>
                setFormData({ ...formData, categories: [e.target.value] })
              }
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione una categoría</option>
              <option value="Madera">Madera</option>
              <option value="Sombra">Sombra</option>
              <option value="Ornamental">Ornamental</option>
            </select>
          </div>
        </div>

        {/* Climas */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">Climas:</label>
          <div className="flex items-center gap-2">
            <img src={Clima} alt="Climas" className="w-6 h-6" />
            <select
              name="climates"
              value={formData.climates}
              onChange={(e) =>
                setFormData({ ...formData, climates: [e.target.value] })
              }
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione un clima</option>
              <option value="Templado">Templado</option>
              <option value="Mediterráneo">Mediterráneo</option>
              <option value="Seco">Seco</option>
            </select>
          </div>
        </div>

        {/* Género */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">Género:</label>
          <div className="flex items-center gap-2">
            <img src={Genero} alt="Género" className="w-6 h-6" />
            <input
              type="text"
              name="genus"
              value={formData.genus}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Descripción */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Descripción:
          </label>
          <div className="flex items-center gap-2">
            <img src={Descripcion} alt="Descripción" className="w-6 h-6" />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Imagen */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">Imagen:</label>
          <div className="flex items-center gap-2">
            <img src={Img} alt="Imagen" className="w-6 h-6" />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Precio por KG */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Precio por KG:
          </label>
          <div className="flex items-center gap-2">
            <img src={Precio} alt="Precio por KG" className="w-6 h-6" />
            <input
              type="number"
              name="price_per_kg"
              value={formData.price_per_kg}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Tipo de Semilla */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Tipo de Semilla:
          </label>
          <div className="flex items-center gap-2">
            <img src={TipoSemilla} alt="Tipo de Semilla" className="w-6 h-6" />
            <select
              name="seed_type"
              value={formData.seed_type}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione un tipo</option>
              <option value="Ortodoxa">Ortodoxa</option>
              <option value="Recalcitrante">Recalcitrante</option>
              <option value="Intermedia">Intermedia</option>
            </select>
          </div>
        </div>

        {/* Características */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Características:
          </label>
          <div className="flex items-center gap-2">
            <img src={Caracteristicas} alt="Características" className="w-6 h-6" />
            <div className="flex gap-4">
              <input
                type="text"
                name="barkColor"
                placeholder="Color de la Corteza"
                value={formData.characteristics.barkColor}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    characteristics: {
                      ...formData.characteristics,
                      barkColor: e.target.value,
                    },
                  })
                }
                className="w-full border border-gray-300 p-2 rounded"
              />
              <input
                type="number"
                name="averageHeight"
                placeholder="Altura Promedio (m)"
                value={formData.characteristics.averageHeight}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    characteristics: {
                      ...formData.characteristics,
                      averageHeight: e.target.value,
                    },
                  })
                }
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* Fecha de Registro */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Fecha de Registro:
          </label>
          <div className="flex items-center gap-2">
            <img src={Fecha} alt="Fecha de Registro" className="w-6 h-6" />
            <input
              type="date"
              name="registration_date"
              value={formData.registration_date}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-4">
          <button
            type="button"
            className="flex items-center gap-2 bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700"
            onClick={handleAgregar}
          > <img src={Guardar} alt="Agregar" className="w-5 h-5" />
            Agregar
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700"
            onClick={() => {
              setFormData({
                common_name: "",
                scientific_name: "",
                family: "",
                categories: [],
                climates: [],
                genus: "",
                description: "",
                image: "",
                price_per_kg: "",
                seed_type: "",
                characteristics: { barkColor: "", averageHeight: "" },
                registration_date: "",
              });
              window.location.href = "/catalogo";
            }}
          > <img src={Cancelar} alt="Cancelar" className="w-5 h-5" />
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioEspecie;
