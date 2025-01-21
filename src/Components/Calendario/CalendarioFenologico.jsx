import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarioFenologico = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    evento: "",
    fechaInicio: "",
    fechaFin: "",
    estado: "",
    municipio: "",
    localidad: "",
    latitud: "",
    longitud: "",
    altitud: "",
  });

  const handleDateClick = (arg) => {
    setFormData({
      ...formData,
      fechaInicio: arg.dateStr,
      fechaFin: arg.dateStr,
    });
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEvents([
      ...events,
      {
        title: formData.evento,
        start: formData.fechaInicio,
        end: formData.fechaFin,
        description: `${formData.estado}, ${formData.municipio}, ${formData.localidad}`,
      },
    ]);
    setShowModal(false);
  };

  return (
    <div className="bg-green-50 p-6 rounded-lg shadow-md">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events}
        dateClick={handleDateClick}
        eventColor="#2d6a4f"
        className="rounded-lg border-2 border-green-600"
      />

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-xl w-full md:w-1/3 max-w-md max-h-[80vh] overflow-auto">
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              Registrar Evento
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-green-700 font-medium">
                  Evento
                </label>
                <input
                  type="text"
                  name="evento"
                  value={formData.evento}
                  onChange={handleFormChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-green-700 font-medium">
                  Fecha de inicio
                </label>
                <input
                  type="date"
                  name="fechaInicio"
                  value={formData.fechaInicio}
                  onChange={handleFormChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-green-700 font-medium">
                  Fecha de fin
                </label>
                <input
                  type="date"
                  name="fechaFin"
                  value={formData.fechaFin}
                  onChange={handleFormChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-green-700 font-medium">
                  Estado
                </label>
                <input
                  type="text"
                  name="estado"
                  value={formData.estado}
                  onChange={handleFormChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-green-700 font-medium">
                  Municipio
                </label>
                <input
                  type="text"
                  name="municipio"
                  value={formData.municipio}
                  onChange={handleFormChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-green-700 font-medium">
                  Localidad
                </label>
                <input
                  type="text"
                  name="localidad"
                  value={formData.localidad}
                  onChange={handleFormChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-green-700 font-medium">
                  Latitud
                </label>
                <input
                  type="number"
                  name="latitud"
                  value={formData.latitud}
                  onChange={handleFormChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-green-700 font-medium">
                  Longitud
                </label>
                <input
                  type="number"
                  name="longitud"
                  value={formData.longitud}
                  onChange={handleFormChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-green-700 font-medium">
                  Altitud
                </label>
                <input
                  type="number"
                  name="altitud"
                  value={formData.altitud}
                  onChange={handleFormChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-black font-medium py-2 px-4 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarioFenologico;
