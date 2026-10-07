import "../styles/Capacity.css";

export default function Capacity({ onNavigate }) {
  const projects = [
    {
      name: "WORKS DIGITAL",
      client: "INTERNAL",
      hours: 8,
      total: 12,
      type: "PROJECT",
    },
    {
      name: "PROJECT A",
      client: "CLIENT A",
      hours: 14,
      total: 20,
      type: "WORK",
    },
    {
      name: "PROJECT B",
      client: "CLIENT B",
      hours: 6,
      total: 10,
      type: "PROJECT",
    },
  ];

  const categories = [
    { name: "PROJECT", hours: 18 },
    { name: "MEETING", hours: 5 },
    { name: "BOOKING", hours: 4 },
    { name: "ADMIN", hours: 2 },
    { name: "PERSONAL", hours: 3 },
  ];

  return (
    <div className="capacity-page">

      {/* SIDEBAR */}
      <aside className="capacity-sidebar">
        <div>
          <h2>WORKS DIGITAL</h2>
          <p>CALENDAR OS</p>
        </div>

        <nav>
          <p onClick={() => onNavigate("dashboard")}>
            01 DASHBOARD
          </p>

          <p onClick={() => onNavigate("calendar")}>
            02 CALENDAR
          </p>

          <p className="active">
            03 CAPACITY
          </p>

          <p onClick={() => onNavigate("settings")}>
            04 SETTINGS
          </p>
        </nav>

        <div className="capacity-profile">
          <p>TETTA ITO</p>
          <p>ADMIN</p>
        </div>
      </aside>


      {/* CONTENT */}
      <main className="capacity-content">

        {/* TOP */}
        <header className="capacity-topbar">
          <div>
            <p>CAPACITY</p>
            <h1>JUNE 2026</h1>
          </div>

          <div className="capacity-actions">
            <button>‹</button>
            <button>TODAY</button>
            <button>›</button>
          </div>
        </header>


        {/* DATE / VIEW */}
        <section className="capacity-controls">

          <div className="capacity-date">
            <span>07</span>

            <div>
              <p>SUNDAY</p>
              <p>JUNE 2026</p>
            </div>
          </div>

          <div className="capacity-views">
            <button className="selected">
              WEEK
            </button>

            <button>
              MONTH
            </button>
          </div>

        </section>


        {/* OVERVIEW */}
        <section className="capacity-overview">

          <div className="capacity-main-number">
            <p>AVAILABLE</p>
            <strong>18H</strong>
            <span>THIS WEEK</span>
          </div>


          <div className="capacity-stat">
            <p>BOOKED</p>
            <strong>23H</strong>
            <span>OF 41H</span>
          </div>


          <div className="capacity-stat">
            <p>UTILIZATION</p>
            <strong>56%</strong>
            <span>THIS WEEK</span>
          </div>


          <div className="capacity-stat warning">
            <p>OVER CAPACITY</p>
            <strong>00H</strong>
            <span>NO CONFLICTS</span>
          </div>

        </section>


        {/* CAPACITY BAR */}
        <section className="capacity-meter">

          <div className="capacity-meter-header">
            <p>WEEKLY CAPACITY</p>
            <span>23H / 41H</span>
          </div>

          <div className="capacity-meter-track">
            <div className="capacity-meter-fill" />
          </div>

          <div className="capacity-meter-labels">
            <span>0H</span>
            <span>20H</span>
            <span>40H</span>
            <span>41H</span>
          </div>

        </section>


        {/* DAILY CAPACITY */}
        <section className="capacity-week">

          <div className="section-label">
            <p>DAILY CAPACITY</p>
          </div>

          <div className="capacity-days">

            <div className="capacity-day">
              <span>MON</span>
              <strong>08</strong>
              <p>06H / 08H</p>
              <div className="day-bar">
                <div style={{ width: "75%" }} />
              </div>
            </div>

            <div className="capacity-day">
              <span>TUE</span>
              <strong>09</strong>
              <p>05H / 08H</p>
              <div className="day-bar">
                <div style={{ width: "62%" }} />
              </div>
            </div>

            <div className="capacity-day">
              <span>WED</span>
              <strong>10</strong>
              <p>07H / 08H</p>
              <div className="day-bar">
                <div style={{ width: "87%" }} />
              </div>
            </div>

            <div className="capacity-day">
              <span>THU</span>
              <strong>11</strong>
              <p>03H / 08H</p>
              <div className="day-bar">
                <div style={{ width: "37%" }} />
              </div>
            </div>

            <div className="capacity-day">
              <span>FRI</span>
              <strong>12</strong>
              <p>02H / 09H</p>
              <div className="day-bar">
                <div style={{ width: "22%" }} />
              </div>
            </div>

          </div>

        </section>


        {/* PROJECT BREAKDOWN */}
        <section className="capacity-section">

          <div className="section-header">
            <p>PROJECT ALLOCATION</p>
            <span>THIS WEEK</span>
          </div>

          <div className="project-list">

            {projects.map((project) => (
              <div
                className="project-row"
                key={project.name}
              >

                <div className="project-info">
                  <strong>{project.name}</strong>
                  <span>
                    {project.client} / {project.type}
                  </span>
                </div>

                <div className="project-progress">

                  <div className="project-progress-track">
                    <div
                      style={{
                        width: `${(project.hours / project.total) * 100}%`,
                      }}
                    />
                  </div>

                </div>

                <div className="project-hours">
                  <strong>{project.hours}H</strong>
                  <span>/ {project.total}H</span>
                </div>

              </div>
            ))}

          </div>

        </section>


        {/* CATEGORY BREAKDOWN */}
        <section className="capacity-section">

          <div className="section-header">
            <p>TIME ALLOCATION</p>
            <span>BY CATEGORY</span>
          </div>

          <div className="category-grid">

            {categories.map((category) => (
              <div
                className="category-item"
                key={category.name}
              >
                <span>{category.name}</span>
                <strong>{category.hours}H</strong>
              </div>
            ))}

          </div>

        </section>


        {/* WORKING HOURS */}
        <section className="capacity-settings">

          <div>
            <p>WORKING HOURS</p>
            <strong>08:00 — 18:00</strong>
          </div>

          <div>
            <p>BREAK</p>
            <strong>12:00 — 13:00</strong>
          </div>

          <div>
            <p>WEEKLY TARGET</p>
            <strong>41H</strong>
          </div>

          <button>
            EDIT CAPACITY
          </button>

        </section>


        {/* BOTTOM */}
        <footer className="capacity-bottom">

          <div>
            <p>NEXT AVAILABLE</p>
            <strong>THU / 11 JUN / 13:00</strong>
          </div>

          <button className="capacity-new">
            + BLOCK TIME
          </button>

        </footer>

      </main>
    </div>
  );
}
