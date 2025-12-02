"use client";

import { useState } from "react";
import Dashboard from "./components/Dashboard";

export default function HomePage() {
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

  const selectedProgram = programs.find((p) => p.id === selected);

  return (
    <div className="min-h-screen p-10 bg-gray-50">

      <h1 className="text-center text-4xl font-bold mb-2 text-blue-900">
        Universidad de Buenos Aires
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Programas y líneas de donación disponibles dentro de la UBA.
      </p>

      {/* ♦ CONTENEDOR PRINCIPAL — Todas las columnas */}
      <div className="w-full">

        {/* 🔷 SI HAY SELECCIÓN → Mostrar barra superior + dashboard */}
        {selected && (
          <div className="w-full flex flex-col gap-6 animate-fade-in">

            {/* 🔵 BARRA SUPERIOR */}
            <div className="program-selected-banner">
              <h2 className="text-2xl font-semibold text-gray-800">
                {selectedProgram?.title}
              </h2>
              <p className="text-gray-600 mt-1">
                {selectedProgram?.desc}
              </p>
            </div>

            {/* 📊 DASHBOARD FULL WIDTH */}
            <div className="w-full bg-white shadow-xl rounded-2xl p-6">
              <Dashboard />
            </div>
          </div>
        )}

        {/* 🔶 SI NO HAY SELECCIÓN → Mostrar los 4 bullets centrados */}
        {!selected && (
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {programs.map((p) => (
                <div
                  key={p.id}
                  className="program-card transition-all duration-500"
                >
                  <button className="program-button-red">Ayudar ▼</button>

                  <div className="program-img-placeholder"></div>

                  <h3 className="program-title">{p.title}</h3>

                  <p className="program-desc">{p.desc}</p>

                  <button
                    onClick={() => setSelected(p.id)}
                    className="program-button-info"
                  >
                    Información
                  </button>
                </div>
              ))}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
