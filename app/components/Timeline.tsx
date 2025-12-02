const steps = [
  { text: "Analysis", color: "#ef4444" },
  { text: "Design", color: "#3b82f6" },
  { text: "Development", color: "#1d4ed8" },
  { text: "Testing", color: "#fb923c" },
  { text: "Implement", color: "#2563eb" },
];

export default function Timeline() {
  return (
    <div>
      <h2>Project Timeline</h2>

      {steps.map((step) => (
        <div
          className="timeline-step"
          key={step.text}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.75rem"
          }}
        >
          <div
            className="timeline-label"
            style={{
              backgroundColor: step.color,
              color: "white",
              padding: "0.5rem 1.5rem",
              borderRadius: "999px 0 0 999px",
              fontWeight: 600,
              fontSize: "0.9rem"
            }}
          >
            {step.text}
          </div>
          <div
            className="timeline-bar"
            style={{
              flex: 1,
              height: "12px",
              background: "#e5e7eb",
              borderRadius: "0 999px 999px 0"
            }}
          />
        </div>
      ))}

      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "0.85rem",
          color: "#4b5563",
          textAlign: "left"
        }}
      >
        <strong>2026:</strong> Jan • Feb • Mar • Apr • May • Jun • Jul • Aug • Sep • Oct • Nov • Dec
      </div>
    </div>
  );
}
