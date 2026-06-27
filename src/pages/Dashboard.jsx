import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <div>
          <h2>WORKS DIGITAL</h2>
          <p>CALENDAR OS</p>
        </div>

        <nav>
          <p>01 DASHBOARD</p>
          <p>02 CALENDAR</p>
          <p>03 CAPACITY</p>
          <p>04 SETTINGS</p>
        </nav>

        <div className="profile">
          <p>TETTA ITO</p>
          <p>ADMIN</p>
        </div>

      </aside>

      <main className="content">

        <div className="topbar">
          <p>SUN, 07 JUN 2026</p>
          <p>09:41</p>
        </div>

        <section className="hero">

          <div>
            <h1>
              WORKS
              <br />
              DIGITAL
            </h1>

            <p>CALENDAR OS</p>
          </div>

          <div className="today">
            <p>TODAY</p>
            <p>NO EVENTS</p>
          </div>

        </section>

        <section className="bottom">

          <div>
            <p>SUNDAY</p>
            <h2>07</h2>
            <p>JUNE 2026</p>
          </div>

          <div className="capacity">
            <p>CAPACITY</p>
            <h3>18H</h3>
            <p>AVAILABLE</p>
          </div>

        </section>

      </main>

    </div>
  );
}