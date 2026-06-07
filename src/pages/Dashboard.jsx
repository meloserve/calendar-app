import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">
        <div className="logo">
          WORKS DIGITAL
        </div>

        <nav>
          <p>01 Dashboard</p>
          <p>02 Calendar</p>
          <p>03 Capacity</p>
          <p>04 Settings</p>
        </nav>
      </aside>

      <main className="content">

        <section className="hero">
          <h1>
            WORKS
            <br />
            DIGITAL
          </h1>
        </section>

        <section className="date">
          <p>SUNDAY</p>
          <h2>07</h2>
          <p>JUNE 2026</p>
        </section>

        <section className="capacity">
          <h2>18H</h2>
          <p>AVAILABLE</p>
        </section>

      </main>

    </div>
  );
}