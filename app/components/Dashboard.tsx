"use client";

import ProjectProgress from "./ProjectProgress";
import BudgetChart from "./BudgetChart";
import RiskIssuesChart from "./RiskIssuesChart";
import Timeline from "./Timeline";
import Notes from "./Notes";

export default function Dashboard() {
  return (
    <main className="main p-6">
      <h1 className="text-3xl font-bold mb-6">
        Equipamiento Tecnológico Dashboard
      </h1>

      {/* Top: Progress + Budget + Risks */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="card p-4 bg-white shadow rounded-xl">
          <ProjectProgress />
        </div>

        <div className="card p-4 bg-white shadow rounded-xl">
          <BudgetChart />
        </div>

        <div className="card p-4 bg-white shadow rounded-xl">
          <RiskIssuesChart />
        </div>
      </section>

      {/* Bottom: Timeline + Notes */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-4 bg-white shadow rounded-xl col-span-2">
          <Timeline />
        </div>

        <div className="card p-4 bg-white shadow rounded-xl">
          <Notes />
        </div>
      </section>
    </main>
  );
}
