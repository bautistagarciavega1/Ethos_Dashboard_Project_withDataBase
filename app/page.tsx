"use client";

import { useState } from "react";
import Dashboard from "./components/Dashboard";

export default function HomePage() {
  const [selected, setSelected] = useState<string | null>(null);

  // 🔹 Programas disponibles
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

  // 🔹 Datos reales para cada programa
  const projectData: any = {
    becas: {
      progress: { onTrack: 25, delayed: 15, concern: 10 },
      budget: { planned: 30000, spent: 12000, remaining: 18000 },
      risks: { high: 3, medium: 5, low: 7 },
      timeline: [
        { label: "Analysis", months: 1 },
        { label: "Design", months: 2 },
        { label: "Development", months: 3 },
        { label: "Testing", months: 1 },
        { label: "Implement", months: 2 },
      ],
      notes: [
        "Revisión de becarios aprobada.",
        "Fondos asignados correctamente.",
        "Sin riesgos significativos.",
      ],
    },

    bibliotecas: {
      progress: { onTrack: 40, delayed: 10, concern: 5 },
      budget: { planned: 50000, spent: 30000, remaining: 20000 },
      risks: { high: 1, medium: 3, low: 10 },
      timeline: [
        { label: "Analysis", months: 1 },
        { label: "Design", months: 1 },
        { label: "Development", months: 2 },
        { label: "Testing", months: 1 },
        { label: "Implement", months: 3 },
      ],
      notes: [
        "Avance estable.",
        "Pendiente compra de libros.",
        "Sin bloqueos críticos.",
      ],
    },

    equipamiento: {
      progress: { onTrack: 20, delayed: 20, concern: 10 },
      budget: { planned: 80000, spent: 50000, remaining: 30000 },
      risks: { high: 4, medium: 6, low: 5 },
      timeline: [
        { label: "Analysis", months: 2 },
        { label: "Design", months: 2 },
        { label: "Development", months: 3 },
        { label: "Testing", months: 2 },
        { label: "Implement", months: 3 },
      ],
      notes: [
        "Compra de notebooks en proceso.",
        "Falta aprobación de proveedores.",
        "Riesgo de demoras logísticas.",
      ],
    },

    investigacion: {
      progress: { onTrack: 45, delayed: 5, concern: 3 },
      budget: { planned: 60000, spent: 20000, remaining: 40000 },
      risks: { high: 1, medium: 2, low: 8 },
      timeline: [
        { label: "Analysis", months: 1 },
        { label: "Design", months: 2 },
        { label: "Development", months: 3 },
        { label: "Testing", months: 1 },
        { label: "Implement", months: 2 },
      ],
      notes: [
        "Fondos bien asignados.",
        "Sin bloqueos.",
        "Actualización mensual recomendada.",
      ],
    },
  };

  const selectedProgram = programs.find((p) => p.id === selected);

  return (
    <div className="min-h-screen p-10 bg-gray-50">

      <h1 className="text-center text-4xl font-bold mb-2 text-blue-900">
        Universidad de Buenos Aires
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Programas y líneas de donación disponibles dentro de la UBA.
      </p>

      <div className="w-full">

        {/* Si hay un programa seleccionado → Banner + Dashboard */}
        {selected && (
          <div className="w-full flex flex-col gap-6 animate-fade-in">

            {/* 🔷 BANNER SUPERIOR */}
            <div className="program-selected-banner flex items-center justify-between">

              {/* Botón Volver */}
              <button
                onClick={() => setSelected(null)}
                className="program-button-back"
              >
                ← Volver
              </button>

              {/* Título y descripción */}
              <div className="text-center flex-1 px-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {selectedProgram?.title}
                </h2>
                <p className="text-gray-600 mt-1">
                  {selectedProgram?.desc}
                </p>
              </div>

              {/* Botón AYUDAR */}
              <button className="program-button-help">
                Ayudar ▼
              </button>
            </div>

            {/* 📊 Dashboard */}
            <div className="w-full bg-white shadow-xl rounded-2xl p-6">
              <Dashboard data={projectData[selected]} />
            </div>

          </div>
        )}

        {/* Si NO hay selección → Mostrar tarjetas */}
        {!selected && (
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {programs.map((p) => (
                <div key={p.id} className="program-card transition-all duration-500">
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
