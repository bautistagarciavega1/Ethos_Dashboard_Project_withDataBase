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
      <h1 className="text-center text-4xl font-bold mb-2 text-blue-900">
        Universidad de Buenos Aires
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Programas y líneas de donación disponibles dentro de la UBA.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* PANEL IZQUIERDO */}
        <div>
          <div className="grid grid-cols-1 gap-8">
            {programs.map((p) => (
              <div
                key={p.id}
                className={`p-6 bg-white shadow rounded-xl cursor-pointer transition-all 
                ${selected === p.id ? "scale-105 border border-blue-500" : "hover:scale-[1.02]"}`}
                onClick={() => setSelected(p.id)}
              >
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>

                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                  Información
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL DERECHO — DASHBOARD */}
        <div>
          {selected ? (
            <div className="p-4 bg-white shadow-xl rounded-xl">
              <Dashboard />
            </div>
          ) : (
            <p className="text-gray-400 text-lg text-center mt-20">
              Selecciona un programa para ver su tablero →
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
