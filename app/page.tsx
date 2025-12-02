"use client";

import { useState } from "react";
import Dashboard from "./components/Dashboard";

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);

  const programs = [
    {
      id: "becas",
      title: "Becas para estudiantes",
      desc: "Apoyo económico para alumnos en situación de vulnerabilidad.",
    },
    {
      id: "bibliotecas",
      title: "Bibliotecas y materiales",
      desc: "Compra de libros, renovación de espacios y acceso a recursos.",
    },
    {
      id: "equipamiento",
      title: "Equipamiento tecnológico",
      desc: "Computadoras, software y aulas digitales para mejorar el aprendizaje.",
    },
    {
      id: "investigacion",
      title: "Fondo de investigación",
      desc: "Apoyo a proyectos científicos en diversas facultades.",
    },
  ];

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      
      {/* Título principal */}
      <h1 className="text-center text-4xl font-bold mb-2 text-blue-900">
        Universidad de Buenos Aires
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Programas y líneas de donación disponibles dentro de la UBA.
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">

        {/* PANEL IZQUIERDO – Tarjetas */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {programs.map((p) => (
              <div
                key={p.id}
                className={`bg-white shadow-md rounded-2xl p-6 text-center transition-all
                ${selected === p.id ? "scale-105 border border-blue-500" : "hover:scale-[1.02]"}
              `}
              >
                {/* Botón rojo Ayudar */}
                <button className="bg-red-500 text-white font-semibold px-5 py-1 rounded-lg mb-3">
                  Ayudar ▼
                </button>

                {/* Imagen (puedes reemplazar el src) */}
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                </div>

                {/* Título */}
                <h3 className="text-lg font-semibold mb-2">
                  {p.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 text-sm mb-4">
                  {p.desc}
                </p>

                {/* Botón Información */}
                <button
                  onClick={() => setSelected(p.id)}
                  className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Información
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL DERECHO – Dashboard al seleccionar */}
        <div>
          {selected ? (
            <div className="p-4 bg-white shadow-xl rounded-2xl">
              <Dashboard />
            </div>
          ) : (
            <p className="text-gray-400 text-lg text-center mt-32">
              Selecciona un programa para ver su tablero →
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
