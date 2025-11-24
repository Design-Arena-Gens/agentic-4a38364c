const metrics = {
  before: [
    { value: "15 000 DZD", label: "Facture d'électricité / mois" },
    { value: "70 %", label: "Bruit extérieur ressenti comme gênant" },
    { value: "Poussière", label: "Nettoyage quotidien nécessaire" },
    { value: "Ambiance terne", label: "Lumière naturelle limitée" },
  ],
  after: [
    { value: "-40 %", label: "Économies d'énergie mensuelles" },
    { value: "90 %", label: "Isolation acoustique renforcée" },
    { value: "0 %", label: "Poussière infiltrée" },
    { value: "Intérieur lumineux", label: "Ambiance propre et moderne" },
  ],
};

export default function Page() {
  return (
    <main className="app">
      <section className="header">
        <h1 className="header-title">
          Transformation d&apos;une fenêtre : du confort retrouvé à la performance énergétique
        </h1>
        <span className="pill">Étude de cas</span>
      </section>

      <section className="content">
        <article className="card before-card">
          <h2 className="card-title">Avant</h2>
          <div className="metrics">
            {metrics.before.map((metric) => (
              <div key={metric.label} className="metric">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </article>

        <div className="transition-divider">
          <span>Fenêtre Aluminium Moderne</span>
        </div>

        <article className="card after-card after-highlight">
          <h2 className="card-title">Après</h2>
          <div className="metrics">
            {metrics.after.map((metric) => (
              <div key={metric.label} className="metric">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="testimonial">
        <p>« Investir dans la qualité m&apos;a permis d&apos;économiser des milliers de dinars par an. »</p>
      </section>

      <section className="cta">
        <button className="cta-button">Demander une estimation</button>
      </section>
    </main>
  );
}
